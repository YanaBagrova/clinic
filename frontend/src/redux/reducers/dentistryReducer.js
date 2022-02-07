import { dentistryAT } from '../actionTypes/dentistryAT';
import { dentistryData } from '../../helpers/data';

const dentistryInitialState = {
  dentistry: dentistryData
}

export const dentistryReducer = (state = dentistryInitialState, action) => {
//   console.log('*************************', dentistryAT.INIT_DENTISTRY)
  switch (action.type) {
    case dentistryAT.INIT_DENTISTRY:
      const dentistry = dentistryData
//       console.log('=================================>');
      return { ...state, dentistry: dentistry };

    default:
      return state
  }
}
