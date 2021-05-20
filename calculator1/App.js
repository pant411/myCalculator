import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

import InputNumberButton from './component/InputNumberButton'

const buttons = [
    ['CLEAR','DEL'],
    [7,8,9,'/'],
    [4,5,6,'*'],
    [1,2,3,'-'],
    [0,'.','=','+']
];

export default class App extends Component{

    renderButtons(){
        let layouts = buttons.map((buttonRows,index) => {
            let rowItem = buttonRows.map((buttonItems,buttonIndex) => {
                return <InputNumberButton 
                value={buttonItems}
                handleOnPress={() => {}}
                key={'btn-' + buttonIndex}/>
            });
            return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
        });
        return layouts
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>0</Text>
                </View>

                <View style={styles.inputContainer}>
                    {this.renderButtons()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    resultContainer:{
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#33312d'
    },
    inputContainer: {
        flex: 8,
        backgroundColor: '#9ebbc4'
    },
    resultText:{
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'right'
    },
    inputRow:{
      flex: 1,
      flexDirection: 'row'
    }
});