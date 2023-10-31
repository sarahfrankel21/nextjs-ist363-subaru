import {useState} from 'react';

import Swatches from './Swatches';

const colors=[

    "red", "orange", "yellow",
];

const CarColorPicker = ()=> {
    const [activeColor, setActiveColor ]= useState("Red");

return<section>
    <div style={{backgroundColor: activeColor}}
    > Large car image here</div>
    <Swatches data={colors} 
    changeHandler={setActiveColor}/>
    <h3> {activeColor}</h3>
    <ul> 
        {colors.map(()=>{
            
         return<li>
            {colors}
         </li>

        })}
    </ul>

    Car Color Picker Goes Here
</section>

}
export default CarColorPicker;