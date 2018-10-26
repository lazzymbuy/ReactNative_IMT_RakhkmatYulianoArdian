import React, { Component } from 'react';
import {Container, Header, Content, Form, Item, Input, Footer, FooterTab, Label ,Button} from 'native-base';
import { View,StyleSheet,Text} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';


//type Props = {};
class App extends Component{//<Props> 
  constructor(){
    super();
    this.state={
      ms:0,
      hg:0,
      imt:0,
      diag:'',
      stat:false
    }
  }

  klik=()=>{
    var mass = parseInt(this.state.ms);
    var hgt = parseInt(this.state.hg)/100;
    var imtv = mass/Math.pow(hgt,2);
    var diagv ='';
    if(imtv<18.5){
      diagv='Berat badan anda kurang';
    }
    else if(imtv>=18.5 && imtv<=24.9){
      diagv='Berat badan ideal';
    }
    else if(imtv>=25.0 && imtv<=29.9){
      diagv ='berat badan berlebih';
    }
    else if(imtv>=30.0 && imtv<=39.9){
      diagv='berat badan sangat berlebih'
    }
    else{
      diagv='berat badan obesitas';
    }
    this.setState({
      ms:mass,
      hg:hgt,
      imt:imtv,
      diag:diagv,
      stat:true
    })
  }
  render() {
    console.disableYellowBox=true;
    return (
      <Container style={styles.container}>
        
        <Header style={{height:30, alignItems:'center', backgroundColor:'blue', fontWeight:'bold'}}>
          <Text>Index Massa Tubuh</Text>
        </Header>

        <Content>
          <Form>
            <Grid>
              <Col>
                <Item floatingLabel>
                <Label style={{color:'red'}}>Massa(Kg)</Label>
                <Input 
                  onChangeText={
                    (angka1)=>this.setState({ms:angka1})
                  }
                  style={{color:'white'}}
                  value={this.state.ms}  
                />
                </Item>
              </Col>
              <Col>
                <Item floatingLabel>
                <Label style={{color:'red'}}>Tinggi Badan (Cm)</Label>
                <Input 
                  onChangeText={
                    (angka2)=>this.setState({hg:angka2})
                  }
                  style={{color:'white'}}
                  value={this.state.hg}
                />
                </Item>
              </Col>
            </Grid>
        </Form>

        <Button onPress={()=>{this.klik();}} info full>
        <Text>Hitung IMT</Text>
        </Button>
        {this.state.stat &&
        <View style={styles.welcome} hidden="true">
          <Text style={styles.text}>Berat Badan:</Text>
          <Text style={styles.text2}>{this.state.ms} kg</Text>
          <Text style={styles.text}>Tinggi Badan:</Text>
          <Text style={styles.text2}>{this.state.hg} m</Text>
          <Text style={styles.text}>Index massa tubuh:</Text>
          <Text style={styles.text2}>{this.state.imt}</Text>
          <Text style={styles.text}>Diagnosa:</Text>
          <Text style={styles.diagnosa}>{this.state.diag}</Text>
        </View>
        }
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>copyright @lazzymbuy</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'aquamarine'
  },
  welcome: {
    textAlign: 'center',
    color:'white'
  },
  text:{
    fontSize: 20,
    textAlign:'center',
    color:'white'
  },
  text2:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center',
    color:'white'
  },
  diagnosa:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center',
    color:'tomato'
  }
});

export default App;