import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import mobileAds, {MaxAdContentRating} from 'react-native-google-mobile-ads';
import firestore from '@react-native-firebase/firestore';

import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
  AdEventType,
  RewardedAdEventType,
} from 'react-native-google-mobile-ads';

import Graph from './Graph';

function App() {
  const functionToGetUser = async () => {
    const user = await firestore().collection('users').get();
    console.log(user.docs);
  };

  functionToGetUser();

  mobileAds()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.PG,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: true,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: true,

      // An array of test device IDs to allow.
      testDeviceIdentifiers: ['EMULATOR'],
    })
    .then(() => {
      // Request config successfully set!
    });

  mobileAds()
    .initialize()
    .then(adapterStatuses => {
      // Initialization complete!
    });

  /* const appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN);
  const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
    // keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        interstitial.show();
      },
    );
    // Start loading the interstitial straight away
    interstitial.load();
    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []); */

  const [value, setValue] = useState(1);
  const adUnitId = 'ca-app-pub-3786803654240519/3811149316';
  return (
    <View
      style={{
        flex: 1,
        marginTop: 5,
        alignItems: 'center',
      }}>
      <View>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
      </View>

      <Graph />
    </View>
  );
}

export default App;
