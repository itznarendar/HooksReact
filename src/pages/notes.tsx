import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react";

export const Notes = ():React.ReactElement => {
    const [notes, setNotes] = useState<string[]>([]);
    const calculation = useMemo(() => expensiveCalculation(2), []);
    const buttonRef = useRef(null);

   // const calculation = expensiveCalculation(notes.length)

    const addNote:Function = () => {
      const newNote = "random";
      setNotes(n => [...n, newNote]);
    };
    const handleClick = useCallback(() => {
        console.log('Button clicked');
        console.log(Object.keys(buttonRef)); // ['someExposedProperty']
        const newNote = "random";
        setNotes(n => [...n, newNote]);
  
      }, [notes]);
    const reduceObj=()=>{
        console.log('Button parent clicked');

    }
    return (
      <div>
      <h1>Button:</h1>
          <button onClick={reduceObj}>reduce</button>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
      <Button addNote={handleClick} ref={buttonRef}
      ></Button>
  
      </div>
    );
   };
type ButtonProps={
    addNote:()=>void
    ref:any
}
   const Button = ( props:ButtonProps): React.ReactElement => {
    console.log("Button re-rendered :( ");
    const buttonRef = useRef(null);
    useImperativeHandle(props.ref, () => ({
        someExposedProperty: () => {
          console.log(`we're inside the exposed property function!`);
        }
      }));
    return (
      <div>
      <button  ref={buttonRef} onClick={props.addNote}>Add</button>
      </div>
    );
   };
 forwardRef(Button);

   const expensiveCalculation = (num:number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };