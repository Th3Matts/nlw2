import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
   },

   buttonPrimary: {
     backgroundColor: '#9871F5'
   },

   buttonSecondary: {
    backgroundColor: '#04D361',
   },

   buttonText: {
     fontFamily: 'Archivo_700Bold',
     color: '#FFF',
     fontSize: 20
   },

   totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40
   },

   content:{
     flex: 1,
     justifyContent: "center"
   },

   title:{
     fontFamily: 'Archivo_700Bold',
     color: '#FFF',
     fontSize: 32,
     lineHeight: 37,
     maxWidth: 180
   },
  
   description: {
     marginTop: 24,
     color: '#D4C2FF',
     fontSize: 16,
     lineHeight: 26,
     fontFamily: 'Poppins_400Regular',
     maxWidth: 240
   },
   
  okButton: {
    marginVertical: 40,
    backgroundColor: '#04D361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
   },

   okButtonText:{
     color: '#FFF',
     fontSize: 16,
     fontFamily: 'Archivo_700Bold'
   }

});

export default styles;