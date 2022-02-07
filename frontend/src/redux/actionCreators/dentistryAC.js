import { dentistryAT } from "../actionTypes/dentistryAT"

export const dentistryInitAC = (payload) => {
  return {
    type: dentistryAT.INIT_DENISTRY,
    payload
  }
}
