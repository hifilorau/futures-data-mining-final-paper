import React from 'react';
import logo from './logo.svg';
import './App.css';
import {VictoryChart, VictoryLine, VictoryBar, VictoryAxis, VictoryTheme, VictoryLegend} from 'victory'
import spanishData from './assets/spanish-muerte.js'
import IntroP from './intro.js';
import S1 from './sentiment1'
// import totals from './assets/totals.js'

const cAnger = '#361D2E'
const negative = '#361D2E'
const neutral = '#CBC0AD'
const positive = '#E1B07E';
//neutral
const cAntic = '#CBC0AD'
const cDisgust = '#86A397'
const cFear = '#4D9078'
//positive
const cJoy = '#E1B07E';
const cSadness = '#9ccfa4'
const cSurprise ='#B4436C'
const cTrust ='#f6e3b4'


const BarChart = ({totals}) => (
      <div className="sentiment-feelings-chart">
         <VictoryLegend x={80} y={10}
              title="Sentiment: 1000 tweets about death in four languages"
              centerTitle
              orientation="horizontal"
              gutter={10}
              itemsPerRow={3}
              height={102}
              style={{ labels: {fontSize: 10}, border: { stroke: "black" }, title: {fontSize: 12 } }}
              data={[
                { name: "Anger", symbol: { fill: cAnger, }, }, { name: "Anticipation", symbol: { fill: cAntic, } }, { name: "Disgust",symbol: { fill: cDisgust, }, },
                { name: "Fear", symbol: { fill: cFear, }, }, { name: "Joy", symbol: { fill: cJoy, }, }, { name: "Sadness", symbol: { fill: cSadness, }, }, { name: "Surprise", symbol: { fill: cSurprise, }, },
                { name: "Trust", symbol: { fill: cTrust, }, },
              
              ]}
            />
      <VictoryChart  
        domainPadding={20}
        // padding={{x:[10, 40], y: [0,0]}}
        // theme={VictoryTheme.material}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        >

        <VictoryBar
        data={totals} 
        x="language"
        y="anger"
        style={{data:
          {fill: cAnger}
        }}
        />
        <VictoryBar
        data={totals} 
        x="language"
        y="anticipation"
        style={{data:
          {fill: cAntic}
        }}
        />
        <VictoryBar 
        data={totals} 
        x="language"
        y="disgust"
        style={{data:
          {fill: cDisgust}
        }}
        />
          <VictoryBar
        data={totals} 
        x="language"
        y="fear"
        style={{data:
          {fill: cFear}
        }}
        />
          <VictoryBar
        data={totals} 
        x="language"
        y="joy"
        style={{data:
          {fill: cJoy}
        }}
        />
          <VictoryBar
        data={totals} 
        x="language"
        y="sadness"
        style={{data:
          {fill: cSadness}
        }}
        />
        <VictoryBar
        data={totals} 
        x="language"
        y="surprise"
        style={{data:
          {fill: cSurprise}
        }}
        />
        <VictoryBar
        data={totals} 
        x="language"
        y="trust"
        style={{data:
          {fill: cTrust}
        }}
        />
      </VictoryChart>
      </div>
  );

export default BarChart;
