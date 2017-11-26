import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide = index => {
        if (index === this.props.data.length -1)
            return (
                <Button 
                    title="Onwards!"
                    raised
                    buttonStyle={styles.button}
                    containerViewStyle={styles.buttonContainer}
                    onPress={this.props.onComplete}
                />
            );
    };

    renderSlides = () => this.props.data.map((slide, index) => {
        return (
            <View 
                key={slide.text}
                style={[styles.slide, {backgroundColor: slide.color}]}
            >
                <Text style={styles.slidetext} >{slide.text}</Text>
                {this.renderLastSlide(index)}
            </View>
        );
    });

    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={styles.scrollview}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

export default Slides;

const styles = StyleSheet.create({
    scrollview: {
      flex: 1,
    },
    slidetext: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    button: {
        backgroundColor: '#0288D1'
    },
    buttonContainer: {
        marginTop: 15
    }
  });