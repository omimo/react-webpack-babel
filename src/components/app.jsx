import styles from '../scss/index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    for (let i=0;i<1000;i++)
    {
      // console.log(i);
    }
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>                
      </div>
    )
  }
}