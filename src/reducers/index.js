import { createReducer } from "./InitalReducer";
import { CREATE,DELETE,UPDATE } from '../actions/types';
const initialState = [
  {
    id: "1",
    fName: "Zanzibar",
    lName: "Dodo",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"
  },
  {
    id: "2",
    fName: "Samuraj",
    lName: "Sami",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"
  }, {
    id: "3",
    fName: "Noz",
    lName: "Ostar",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"
  },
  {
    id: "4",
    fName: "Slavek",
    lName: "Donji",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"

  } ,{
    id: "5",
    fName: "Lara",
    lName: "Nedim",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"
  },
  {
    id: "6",
    fName: "Luka",
    lName: "Lukac",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"
  },
  {
    id: "7",
    fName: "Dana",
    lName: "Bijela",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"
  },
  {
    id: "8",
    fName: "Cyber",
    lName: "Nun",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"
  },
  {
    id: "9",
    fName: "Medo",
    lName: "Brundo",
    mobile: "098678988",
    phone: "040578345",
    email: "something@gmail.com",
    date: "11/15/1991"
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
