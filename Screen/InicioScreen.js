import React from 'react';
import {ScrollView, StyleSheet,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes 
import Fondo  from '../assets/images/fondo-inicio.png' 

//componentes
import EspacioMax  from '../Components/Inicio//Espacio' 
import EspacioMin  from '../Components/test/Espacio' 
import Cabecera  from '../Components/Inicio/Cabecera' 
import Item  from '../Components/Inicio/Item' 
import Slider  from '../Components/Inicio/Slider' 
import Examen  from '../Components/Inicio/Examen' 
import Promocion  from '../Components/Inicio/Promocion'

export default class Inicioclinica extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <ImageBackground resizeMode={"cover"} source={Fondo} style={styles.fondo}>
        <EspacioMax/>
        <Cabecera/>
        <Item/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <EspacioMin/>
        <Slider/>
        <Examen/>
        <Promocion/>
        
        </ScrollView>
      </ImageBackground>
    )}};

 
const styles = StyleSheet.create({
  
  fondo:{
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    width: width,
    height: height,
    position: 'absolute',
    backgroundColor: '#FFFFFF' 
  },
  
});
