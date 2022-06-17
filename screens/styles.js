import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {width: 200, height: 50},
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    borderColor: '#FFA500',
  },
  pickerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: '#FF7600',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  headerContainer: {
    padding: 20,
  },
  headerButton: {
    width: 40,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#74858C',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerImage: {width: 20, height: 20},
});

export default styles;
