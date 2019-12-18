import React from 'react'



export default function Card (props){


    return(
        <div>
            {props.teamMember.map(mem => (
                <div>
                    <h1>{mem.name} </h1>
                    <p> {mem.email}</p>
                    <p>{mem.role}</p>
                </div>
            ))}
            
        </div>
    )
}