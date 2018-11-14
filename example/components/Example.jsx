import React from 'react';
import {ThemeProvider} from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
    {
      id: '1',
      message: 'Hello, what is your vehicle issue?',
      trigger: '2',
    }, {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Possible issues:',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        {value: 1, label: 'Coolant Level, might be low', trigger: 'coolant0'},
        {value: 2, label: 'Cooling fan, might not be running', trigger: 'fan'},
        {value: 3, label: 'Both are okay', trigger: 'thermostat'},
      ],
    },{
      id: 'thermostat',
      message:
        'Try checking the thermostat sensor',
    trigger:'1',
    },{
    id:'fan',
    message:'Try to replace radiator fan motor.',
    trigger:'1',
    },{
    id:'coolant0',
    message:'Check the coolant level of your vehicle.\n Here is related information: ',
    trigger:'coolant1',
    },{
    id: 'coolant1',
    component: (
      <div><img src={'../components/cool.png'} width={400}/> </div>
    ),
    trigger:'coolant2',
  },{
    id: 'coolant2',
    component: (
      <div><video className='videoTag' autoPlay loop muted>
        <source src={'../components/c-vid.mp4'} width = {50} type='video/mp4' />
      </video></div>
    ),
    trigger:'coolant3',
  },{
    id: 'coolant3',
    component: (
      <div>
        <p>Parts to buy: <br></br>
          Coolant :<br></br>
          1) <a href={"https://bit.ly/2B5bSdH"}>https://bit.ly/2B5bSdH </a><br></br>
          2) <a href={"https://bit.ly/2OI264U"}>https://bit.ly/2OI264U</a>
        </p>
      </div>
    ),
  },
  ]
;

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot steps={steps}/>
  </ThemeProvider>
);

export default ThemedExample;
