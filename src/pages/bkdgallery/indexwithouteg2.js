import React, { Component } from "react";
import {
  Platform,
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView
} from "react-native";
//import LinearGradient from "react-native-linear-gradient";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./styles/SliderEntry.style";
import SliderEntry from "./components/SliderEntry";
import styles, { colors } from "./styles/index.style";
import { ENTRIES1, ENTRIES2 } from "./static/entries";
import { scrollInterpolators, animatedStyles } from "./utils/animations";

const IS_ANDROID = Platform.OS === "android";
const SLIDER_1_FIRST_ITEM = 1;

export default class boukdgallery1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <SliderEntry data={item} even={false} />;
  }

  _renderDarkItem({ item, index }) {
    return <SliderEntry data={item} even={true} />;
  }

  mainBoukdgallery1(number, title) {}

  momentumBoukdgallery1(number, title) {}

  layoutBoukdgallery1(number, title, type) {
    const isTinder = type === "tinder";
    return (
      <View
        style={[
          styles.boukdgallery1Container,
          isTinder
            ? styles.boukdgallery1ContainerDark
            : styles.boukdgallery1ContainerLight
        ]}
      >
        <Text
          style={[styles.title, isTinder ? {} : styles.titleDark]}
        >{`Boukdgallery1 ${number}`}</Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
          {title}
        </Text>
        <Carousel
          data={isTinder ? ENTRIES2 : ENTRIES1}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
        />
      </View>
    );
  }

  customBoukdgallery1(number, title, refNumber, renderItemFunc) {
    const isEven = refNumber % 2 === 0;

    // Do not render boukdgallery1s on Android; because of the zIndex bug, they won't work as is
    return !IS_ANDROID ? (
      <View
        style={[
          styles.boukdgallery1Container,
          isEven
            ? styles.boukdgallery1ContainerDark
            : styles.boukdgallery1ContainerLight
        ]}
      >
        <Text
          style={[styles.title, isEven ? {} : styles.titleDark]}
        >{`Boukdgallery1 ${number}`}</Text>
        <Text style={[styles.subtitle, isEven ? {} : styles.titleDark]}>
          {title}
        </Text>
        <Carousel
          data={isEven ? ENTRIES2 : ENTRIES1}
          renderItem={renderItemFunc}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          scrollInterpolator={
            scrollInterpolators[`scrollInterpolator${refNumber}`]
          }
          slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
          useScrollView={true}
        />
      </View>
    ) : (
      false
    );
  }

  render() {
    const boukdgallery11 = this.mainBoukdgallery1(
      1,
      "Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots"
    );
    const boukdgallery12 = this.momentumBoukdgallery1(
      2,
      "Momentum | Left-aligned | Active animation"
    );
    const boukdgallery13 = this.layoutBoukdgallery1(
      3,
      '"Stack of cards" layout | Loop',
      "stack"
    );
    const boukdgallery14 = this.layoutBoukdgallery1(
      4,
      '"Tinder-like" layout | Loop',
      "tinder"
    );
    const boukdgallery15 = this.customBoukdgallery1(
      5,
      "Custom animation 1",
      1,
      this._renderItem
    );
    const boukdgallery16 = this.customBoukdgallery1(
      6,
      "Custom animation 2",
      2,
      this._renderLightItem
    );
    const boukdgallery17 = this.customBoukdgallery1(
      7,
      "Custom animation 3",
      3,
      this._renderDarkItem
    );
    const boukdgallery18 = this.customBoukdgallery1(
      8,
      "Custom animation 4",
      4,
      this._renderLightItem
    );

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor={"rgba(0, 0, 0, 0.3)"}
            barStyle={"light-content"}
          />

          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
          >
            {boukdgallery11}
            {boukdgallery12}
            {boukdgallery13}
            {boukdgallery14}
            {boukdgallery15}
            {boukdgallery16}
            {boukdgallery17}
            {boukdgallery18}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
