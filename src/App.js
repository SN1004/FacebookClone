import React, { Component } from 'react'
import './index.module.css'
import styles from './styles.module.scss'
import SearchIcon from '@mui/icons-material/Search';

export default class QuantityInput extends Component { 
   render() {

  return (
    <div className={styles.ContainerBG}>
      <div className={styles.Header}>
        <div style={{color:`white`}}>
          <a style={{color:`white`,fontSize:25,fontFamily:`Italic`,fontWeight:`bold`}}>Facebook</a>
          <div className={styles.ContainerSearchBar}><input type="text" className={styles.SearchBar} /><SearchIcon/></div>
        </div>
      </div>
      <div className={styles.ProfileBackground}>
        Profile Background Image
        <div className={styles.ProfileImage}>
          Profile Image
        </div>
        <div className={styles.ButtonContainer}>
          <a className={styles.Button} style={{borderLeftWidth:`4px`}}>Info</a>
          <a className={styles.Button}>Friends</a>
          <a className={styles.Button}>Photos</a>
          <a className={styles.Button}>Timeline</a>
          <a className={styles.Button} style={{borderRightWidth:`4px`}}>More</a>
        </div>
      </div>
      <div style={{position:'sticky',top:'10px'}}>
      <div className={styles.NewsFeed}>
        NewsFeed
        <div className={styles.Feeds}>
          NewsImage
        </div>
        </div>
      </div>
      <div className={styles.ContainerofPostandTimeline}>
      <div className ={styles.ContainerTimeline}>
        <div className={styles.ContainerPhotos}>
          <h4 style={{paddingLeft:`50px`,}}>Info</h4>
            <ul style={{marginLeft:`-80px`,marginTop:`60px`}}>
              <li>Suryansh Neekhra</li>
              <li>Male</li>
              <li>Studied at - GD Goenka Public School</li>
            </ul>
        </div>
        <div className={styles.ContainerPhotos}>
          <h4 style={{paddingLeft:`50px`,}}>Photos</h4>
            <ul style={{marginLeft:`-100px`,marginTop:`60px`}}>
              <li>Suryansh Neekhra</li>
              <li>Male</li>
              <li>Studied at - GD Goenka Public School</li>
            </ul>
        </div>
      </div>
      <div className={styles.ContainerPosts}>
        hello
      </div>
      </div>
    </div>
  );
  }
}