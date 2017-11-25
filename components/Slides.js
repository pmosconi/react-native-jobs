import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderSlides = () => this.props.data.map((slide) => {
        return (
            <View 
                key={slide.text}
                style={[styles.slide, {backgroundColor: slide.color}]}
            >
                <Text style={styles.slidetext} >{slide.text}</Text>
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
    }
  });