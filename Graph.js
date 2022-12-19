import React, {useState} from 'react';
import {View, Text, Dimensions, Button, StyleSheet} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

function Graph() {
  const [febRains, setFebRains] = useState(35);
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 20, 28, 89, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [50, 40, 58, 69, 99, 43],
        color: (opacity = 1) => `rgba(0, 99, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days', 'Rainy Months'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View
      style={{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}>
      <Text style={{marginTop: 10, color: 'white', fontSize: 20}}>
        Hello I am a Graph.
      </Text>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />

      <View style={styles.container}>
        <Slider
          value={febRains}
          onValueChange={value => setFebRains(value)}
          animateTransitions={false}
          maximumValue={100}
          step={2}
          thumbTintColor={'#009050'}
          animationType={'spring'}
        />
        <Text>Value: {febRains}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    minWidth: 250,
    alignSelf: 'center',
    marginTop: 40,
  },
});
export default Graph;
