
import { createReducer } from "./InitalReducer";
import { CREATE,DELETE,UPDATE } from '../actions/types';
const initialState = [
  {
    id: "1",
    fName: "Zanzibar",
    lName: "Dodo",
    phone: "098678988",
    email: "something@gmail.com"
  },
  {
    id: "2",
    fName: "Samuraj",
    lName: "Sami",
    phone: "098678988",
    email: "something@gmail.com"
  }, {
    id: "3",
    fName: "Noz",
    lName: "Ostar",
    phone: "098678988",
    email: "something@gmail.com"
  },
  {
    id: "4",
    fName: "Slavek",
    lName: "Donji",
    phone: "098678988",
    email: "something@gmail.com"
  } ,{
    id: "5",
    fName: "Lara",
    lName: "Nedim",
    phone: "098678988",
    email: "something@gmail.com"
  },
  {
    id: "6",
    fName: "Luka",
    lName: "Lukac",
    phone: "098678988",
    email: "something@gmail.com"
  },
  {
    id: "7",
    fName: "Dana",
    lName: "Bijela",
    phone: "098678988",
    email: "something@gmail.com"
  },
  {
    id: "8",
    fName: "Cyber",
    lName: "Nun",
    phone: "098678988",
    email: "something@gmail.com"
  },
  {
    id: "9",
    fName: "Medo",
    lName: "Brundo",
    phone: "098678988",
    email: "something@gmail.com"
  }
]

export const create=( state, payload)=>{
  return[...state, Object.assign({}, payload.address)]
} 
export const update=(state, payload)=>{
return[...state.filter(address=>address.id !==payload.address.id), Object.assign({}, payload.address) ]

}
export const deletee=(state , payload)=>{
  return[...state.filter(address=>address.id !== payload.addressId)]
}

export default createReducer(initialState, {
  [CREATE]: create,
  [UPDATE]: update,
  [DELETE]: deletee,
 
});
