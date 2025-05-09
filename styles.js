import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'green',
  },
  logo: {
    resizeMode: 'contain',
    width: '95%',
    height: 150,
  },
  logoArea: {
    marginTop: 20,
  },
  inputCep: {
    marginTop: 10,
    marginBottom: 20,
    padding: 5,
    backgroundColor: '#FFF',
  },
  input: {
    margin: 5,
    padding: 5,
    backgroundColor: '#98FB98',
    borderRadius: 5,
  },
  viewArea: {
    backgroundColor: '#ADFF2F',
    padding: 15,
    fontSize: 16,
    margin: 10,
    borderRadius: 5,
  },
  subText: {
    fontSize: 14,
    marginTop: 100,
  },
  button: {
    color: '#000',
    backgroundColor: '#FFD700',
    borderRadius: 15,
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
  },
  card: {
    backgroundColor: '#EEE',
    padding: 10,
    marginTop: 10,
  }
});

export default styles;