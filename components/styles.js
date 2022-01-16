import { StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
        screen: {
            padding: 50,
          },
        inputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            borderColor: 'black',
            borderWidth: 2,
            padding: 10,
            width: '80%',
            marginBottom: 10,
            textAlign: 'center',
            borderRadius: 12,
        },
        button: {
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 12,
            width: '40%',
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '50%',
        },
        goalListItem: {
            padding: 10,
            marginVertical: 10,
            backgroundColor: '#cccccc',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 12,
        },
        centerText: {
            textAlign: 'center',
        }

    });

export default styles;