import React from 'react';
import './App.css';
import {VictoryChart, VictoryPie, VictoryScatter, VictoryTheme, VictoryLegend} from 'victory'
import spanishData from './assets/spanish-muerte.js'
import englishData from './assets/death-english.js'
import frenchData from './assets/french-mort.js'
import dutchData from './assets/dutch-dood.js'

// const cNegative
// const cPostive 
//neative
const cAnger = '#361D2E'
const negative = '#361D2E'
const neutral = '#CBC0AD'
const positive = '#E1B07E';
//neutral
const cAntic = '#CBC0AD'
const cDisgust = '#dc9874'
const cFear = '#f6e3b4'
//positive
const cJoy = '#E1B07E';
const cSadness = 'blue'
const cSurprise ='#9ccfa4'
const cTrust ='purple'


const englishTweets = [{x:'positive', y: 177}, {x:'negative', y: 569}, {x: 'neutral', y: 253}]
const spanishTweets = [{x:'positive', y: 247}, {x:'negative', y: 530}, {x: 'neutral', y: 222}]
const frenchTweets = [{x:'positive', y: 187}, {x:'negative', y: 655}, {x: 'neutral', y: 157}]
const dutchTweets = [{x:'positive', y: 252}, {x:'negative', y: 498}, {x: 'neutral', y: 252}]

class Chart3 extends React.Component {

  componentDidMount(){
  console.log(this.getNeutralArray(dutchData)) 
  // console.log(this.getNeutralArray(spanishData))   
  // console.log(this.getNeutralArray(frenchData))
  console.log(this.getNegativeArray(dutchData)) 
  // console.log(this.getNegativeArray(spanishData))   
  // console.log(this.getNegativeArray(frenchData))
  console.log(this.getPositiveArray(dutchData)) 
  // console.log(this.getPositiveArray(spanishData))   
  // console.log(this.getPositiveArray(frenchData))
       

  }

  getPositiveArray(data) {
    return data.filter(i => i.positive > i.negative)
  } 

  getNegativeArray(data) {
    return data.filter(i => i.positive < i.negative)
  } 
  getNeutralArray(data) {
    return data.filter(i => i.positive == i.negative)
  } 


  render() {
    // console.log(this.getPositiveArray(englishData))
    return (
      <div className="pie-outer">
           <VictoryLegend x={80} y={10}
              title="Positive, Negative, and Neutral Tweets about Death: English"
              centerTitle
              orientation="horizontal"
              gutter={10}
              itemsPerRow={3}
              height= {80}
              style={{ labels: {fontSize: 10}, border: { stroke: "black" }, title: {fontSize: 12 } }}
              data={[
                { name: "Positive", symbol: { fill: positive, }, }, { name: "Negative", symbol: { fill: negative, }}, { name: "Neutral", symbol: { fill: neutral, } }
              ]}
            />
      <div className="pie-chart-wrapper">
        
         <div className="pie-wrap">
           <h3>English</h3>
          <VictoryPie
          data={englishTweets} 
          colorScale={[positive, negative, neutral ]}
          labelRadius={90}
          style={{ labels: { fill: "white", fontSize: 16, fontWeight: "bold" } }}
          />
          </div>
       
       

          <div className="pie-wrap">
          <h3>Spanish</h3>
          <VictoryPie
          data={spanishTweets} 
          colorScale={[positive, negative, neutral ]}
          labelRadius={90}
          style={{ labels: { fill: "white", fontSize: 16, fontWeight: "bold" } }}
          />
        </div>

        <div className="pie-wrap">
          <h3>French</h3>
          <VictoryPie
          data={frenchTweets} 
          colorScale={[positive, negative, neutral ]}
          labelRadius={90}
          style={{ labels: { fill: "white", fontSize: 16, fontWeight: "bold" } }}
          />
        </div>

        <div className="pie-wrap">
          <h3>Dutch</h3>
          <VictoryPie
            colorScale={[positive, negative, neutral ]}
          data={dutchTweets} 
          labelRadius={90}
          style={{ labels: { fill: "white", fontSize: 16, fontWeight: "bold" } }}
          />
        </div>
        </div>
      </div>
  );
  }
}

export default Chart3
