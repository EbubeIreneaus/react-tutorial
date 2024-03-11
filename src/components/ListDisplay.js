
import React from 'react'

export default function ListDisplay() {
 let data = ['Okigwe', "Ebube", "Ireneaus", 'Ejiofor']

 return (
   <div>
     {
        data.map(
            name => 
            <div>
                <h2> {name} </h2>
            </div>
            )
    }
   </div>
 )
}
