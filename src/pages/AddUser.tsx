import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Notes } from "./notes";

function UserAdd(){
const [user, setuser] = useState<string>('');
    const [city, setcity] = useState( );
    const cityref = useRef<HTMLInputElement>(null)
    const onUserChange=(value:string)=>{
        setuser(value)
   }
   const onCityChange=()=>{
console.log(cityref.current?.value)
   }
 useEffect(() => {
    console.log(cityref.current?.value,"useffect")

 }, [])
 useLayoutEffect(() => {
    console.log(cityref.current?.value,"useLayoutffect")

 }, [])
 useCallback(
   () => {
    console.log(cityref.current?.value,"useCallback")

   },
   [],
 )
 
console.log(cityref?.current?cityref?.current?.value:'')
 
   return<>
   <input type="text" value={user}
             onChange={(e) => onUserChange(e.target.value)}

   ></input>
   <p>{user}</p>
      <input type="text" value={city} ref={cityref}
             onChange={onCityChange}></input>

<Notes></Notes>

   </> 
}
export default UserAdd