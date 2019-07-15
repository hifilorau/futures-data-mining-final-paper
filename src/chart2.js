import React from 'react';
import logo from './logo.svg';
import './App.css';
import {VictoryChart, VictoryLine, VictoryBar, VictoryAxis, VictoryTheme, VictoryLegend} from 'victory'
import IntroP from './intro.js';
import S1 from './sentiment1'
// import totals from './assets/totals.js'


const negative = '#361D2E'
const neutral = '#CBC0AD'
const positive = '#E1B07E';

const Chart2 = ({totals}) => (
      <div className="sentiment-feelings-chart">
      <VictoryChart  
        domainPadding={20}
        // padding={{x:[10, 40], y: [0,0]}}
        // theme={VictoryTheme.material}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        >
           <VictoryLegend x={80} y={10}
              title="Overall Sentiment by language: Positive vs. Negative"
              centerTitle
              orientation="horizontal"
              gutter={10}
              itemsPerRow={3}
              style={{ labels: {fontSize: 10}, border: { stroke: "black" }, title: {fontSize: 12 } }}
              data={[
                { name: "Positive", symbol: { fill: positive, }, }, { name: "Negative", symbol: { fill: negative, } }
              ]}
            />

        <VictoryBar
        data={totals} 
        x="language"
        y="negative"
        style={{data:
          {fill: negative}
        }}
        />
        <VictoryBar
          data={totals} 
          x="language"
          y="positive" 
          style={{data:
            {fill: positive}
          }}
          />
            
      </VictoryChart>
      </div>
  );

export default Chart2;
