import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure java modules available in npm
import { Card , Button, Checkbox} from 'react-native-paper';

export default function App() {
  return (

    
    <View style={styles.container}>
    
    
  <View style={{background:"red",padding:10}}>
      <Text style={{color:"white", textAlign:"center",fontSize:20,fontWeight:"bold"}}>Sacola</Text>
      
  </View>

  <View style={styles.produto}> 
<Image style={styles.image} source={require('./pizza.jfif')} />
<Text style={{color:"grey", textAlign:"left",fontSize:11}}>Pizza de marguerita                                R$40,00 </Text>
</View>

  <View style={styles.produto}> 
<Image style={styles.image} source={require('./guarana.jfif')} />
<Text style={{color:"grey", textAlign:"left",fontSize:11}}>Guarana                                                    R$7,00 </Text>
</View>

<View style={{borderColor:"black",borderBottomWidth:1,padding:10}}>
      <Text style={{color:"red", textAlign:"left",fontSize:11}}>Total do pedido:                                                     R$ 57,00</Text>
      <Text style={{color:"grey", textAlign:"left",fontSize:11}}>Total dos itens:                                                       R$ 47,00</Text>
      <Text style={{color:"grey", textAlign:"left",fontSize:11}}>Taxa de entrega:                                                     R$ 10,00</Text>
  </View>


<View style={{borderColor:"black",borderBottomWidth:1,padding:10}}>
      <Text style={{color:"black", textAlign:"left",fontSize:11}}>Tempo de entrega:                                              40-45 min
      </Text>
  </View>

<View style={styles.opcoes}>

<View style={{borderColor:"black",borderBottomWidth:1,padding:10,flex:1,borderRightColor:"#000",borderRightWidth:1}}>
      <Text style={{color:"black", textAlign:"left",fontSize:11}}>Forma de pagamento: </Text>

     <Text> <Checkbox/> Cartão</Text>
     <Text> <Checkbox /> Dinheiro</Text>

  </View>



<View style={{borderColor:"black",borderBottomWidth:1,padding:10,flex:1}}>
<Text style={{color:"black", textAlign:"left",fontSize:11}}>Modalidade de entrega: </Text>
  <Text> <Checkbox/> Moto</Text>
     <Text> <Checkbox /> Bicicleta</Text>
</View>
</View>



<View style={{borderColor:"black",borderBottomWidth:1,padding:10}}>
      <Text style={{color:"black", textAlign:"left",fontSize:11}}>Endereço de entrega: </Text>
  </View>

      <Text style={styles.endereco}>
        CEP: 87045-940          
        Endereço: Rua XV de Novembro 
        N°: 248
        Bairro: Jd. Itália
        Cidade: Maringá
        
      </Text>

      <View>
<Button style={styles.botao} mode="contained" >
    Finalizar
  </Button>
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
   produto: {
    alignContent:"center",
    flexDirection:"row",
    borderColor:"#000",
    borderBottomWidth:1
  },
    opcoes: {
    flexDirection:"row",
  },
  image: {
    width:40,
    height:40,
    margin:10
  },
   botao: {
    backgroundColor: 'red',
    width:"60%",
    alignSelf:"center",
    padding:10
  },
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  endereco: {
    margin: 24,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
