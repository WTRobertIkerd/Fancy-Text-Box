# Fancy-Text-Box
## Fancy-Text-Box is a React component designed to work in tandem with react-hook-form


### Valid Props: 

#### - blurColor: Sets the color of the input when not selected
#### - focusColor: Sets the color of the input when selected
#### - parentBackgroundColor: Sets the background color of the text, it should match the color of the parent element
#### - fontSize: Sets the fontSize of the placeholder text
#### - width: Changes the width of the input
#### - height: Changes the height of the input
#### - name: Changes the placeholder text of the input
#### - type: Changes the input type
#### - fontFamily: Changes the font used by the input and text
#### - register: Used to get the information from react-hook-form 
#

#### EX. 
```js 
 import InputBox from "./InputBox"
 import { useForm } from "react-hook-form";

 function App() {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm()

   return (
     <div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <InputBox 
           register={register("idk", {
             required: true,
            maxLength: 50
           })}
        />
         <input type="submit" />
       </form>
     </div>
   );
 }
 ```
