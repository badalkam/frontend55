import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";




const token = localStorage.getItem("token");

if (token) {

  let decode = jwtDecode(token);
  console.log(decode);
  const { username } = decode;
  console.log(username);
 
  
}
else{
   const username = ""
}



export const usePropStore = create(() => ({
  propertyname: "",
  address: "",
  about: "",
  bhk1: "",
  bhk2: "",
  bhk3: "",
  sell: "",
  rent: "",
  photo: "",
  search:false,
  username:"",
  name:"",
  property_id:"",
  email:"",
  code:"",
}));

// const paw = usePropStore.getState().paw;
// const userId = usePropStore.getState().userId;
// const itemId = usePropStore.getState().itemId;

// const unsub1 = useDogStore.subscribe(console.log);

// usePropStore.setState({ paw: false });
// usePropStore.setState({ userId: false });
// usePropStore.setState({ itemId: false });

// unsub1();

// You can of course use the hook as you always would
// function Component() {
//   const propertyname = usePropStore((state) => state.propertyname);
//   const address = usePropStore((state) => state.address);
//   const about = usePropStore((state) => state.about);
//   const bhk1 = usePropStore((state) => state.bhk1);
//   const bhk2 = usePropStore((state) => state.bhk2);
//   const bhk3 = usePropStore((state) => state.bhk3);
//   const sell = usePropStore((state) => state.sell);
//   const rent = usePropStore((state) => state.rent);
//   const photo = usePropStore((state) => state.photo);
// }
