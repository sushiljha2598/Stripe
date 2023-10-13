import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {SP_KEY} from '@env';
import PaymentScreen from './src/PaymentScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StripeProvider
          publishableKey={SP_KEY}
          merchantIdentifier="merchant.identifier" // required for Apple Pay
          urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        >
          <PaymentScreen />
        </StripeProvider>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
