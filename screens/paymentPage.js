import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Layout } from '@ui-kitten/components';
import { updateDonation } from '../firebase';
import { Alert, KeyboardAvoidingView, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

export default PaymentPage = () => {
    const [totalAmount, setTotalAmount] = useState("$23.20");

    const navigation = useNavigation();

    const returnBack = () => {
        navigation.navigate("MainPage");
    }


    const pay = () => {
        Alert.alert(
            "Confirm Payement",
            "Are you sure you want to pay?",
            [
                {
                    text: "Confirm",
                    onPress: () => {handlePayment()},
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancelled!!"),
                    style:"cancel"
                },
            ],
            { cancelable: true }
        )
    }

    const handlePayment = () => {
        navigation.navigate("MainPage");
    }

    return (
        <ScrollView>
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text style={styles.title}>Total Amount</Text>
            <Text style={styles.title}>{totalAmount}</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => setTotalAmount('$24.00')}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Round Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={pay}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={returnBack}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Back</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 280,
    },
    button: {
      backgroundColor: '#ED1A3B',
      marginTop: 5,
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#ED1A3B',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#ED1A3B',
      fontWeight: '700',
      fontSize: 16,
    },
    fieldTitle: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
    }
});