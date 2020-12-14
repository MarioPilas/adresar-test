import { CREATE,DELETE,UPDATE} from './types';

export const create=(address)=>{
  return{
      type: CREATE,
      payload: {address}
  }
}

export const deletee=(addressId)=>{
  return{
      type: DELETE,
      payload: {addressId}
  }
}
export const update=(address)=>{
  return{
      type: UPDATE,
      payload: {address}
  }
}