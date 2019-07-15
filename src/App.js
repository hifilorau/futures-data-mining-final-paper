import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './barchart.js'
import totals from './assets/totals.js'
import IntroP from './intro.js';
import S1 from './sentiment1'
import S2 from './s2'
import S3 from './s3'
import Chart2 from './chart2.js'
import Chart3 from './chart3.js'
import Conclusion from './conclusion.js'

//neative
const cAnger = '#361D2E'
//neutral
const cAntic = '#CBC0AD'
const cDisgust = '#dc9874'
const cFear = '#f6e3b4'
//positive
const cJoy = '#E1B07E';
const cSadness = 'blue'
const cSurprise ='#9ccfa4'
const cTrust ='purple'
// const cNegative
// const cPostive 


function App() {
  return (
    <div className="App">
      <h2>What Can We Learn from How We Talk about Death in Different Languages (On twitter...)</h2>
      <div className="by">by Tom Rau</div>
      <IntroP />
      <BarChart totals={totals}/>
      <S1 />
      <Chart2 totals={totals}/>
      <S2 />
      <Chart3/>
      <S3 />
      <Conclusion />
    </div>
  );
}

export default App;
