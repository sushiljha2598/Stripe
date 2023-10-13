import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CardField, createToken, confirmPayment} from '@stripe/stripe-react-native';
import ButtonComp from './Components/ButtonComp';
import creatPaymentIntent from './stripeApis';

const PaymentScreen = () => {
  const [cardInfo, setCardInfo] = useState(null);
  const fetchCardDetail = cardDetail => {
    // console.log("my card details",cardDetail)
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else {
      setCardInfo(null);
    }
  };

  const onDone = async () => {
    let apiData = {
      amount: 100,
      currency: 'INR',
    };

    try {
      const res = await creatPaymentIntent(apiData);
      console.log('Payment intent created succesfully...!!!', res);

      if (res?.data?.paymentIntent) {
        let confirmPaymentIntent = await confirmPayment(
          res?.data?.paymentIntent,
          {paymentMethodType: 'Card'},
        );
        console.log('confirmPaymentIntent ==> ', confirmPaymentIntent);
        console.log();('Payment succesfully Completed...!!!');
      }
    } catch (error) {
      console.log('Error rasied during payment intent', error);
    }

    //To create token and send it to the backend
    // console.log("cardInfocardInfocardInfo", cardInfo)
    // if (!!cardInfo) {
    //     try {
    //         const resToken = await createToken({ ...cardInfo, type: 'Card' })
    //         console.log("resToken", resToken)

    //     } catch (error) {
    //         alert("Error raised during create token")
    //     }
    // }
  };

  return (
    <View style={{flex: 1}}>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          fetchCardDetail(cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <ButtonComp onPress={onDone} disabled={!cardInfo} />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
