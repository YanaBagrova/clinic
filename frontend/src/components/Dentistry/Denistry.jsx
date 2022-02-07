import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DenistryCard from '../DenistryCard/DenistryCard';
import { v4 as uuidv4 } from 'uuid';
import styles from './Denistry.module.css';
import Fade from "react-reveal/Fade";

function Denistry() {

  const dentistryData = useSelector(state => state.dentistryReducer.dentistry)
  console.log(dentistryData)

   return (
    <Fade bottom>
    <div className={styles.content}>
      {
        dentistryData.map(el => <DenistryCard  key={uuidv4()} el={el}/>)
      }
    </div>
    </Fade>
  )
}

export default Denistry
