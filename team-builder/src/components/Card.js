import React from 'react'



export default function Card (props){


    return(
        <div className="card">
            {props.teamMember.map(mem => (
                <div key={mem.id} >
                    <h2>{mem.name} </h2>
                    <p> {mem.email}</p>
                    <p>{mem.role}</p>
                </div>
            ))};
            
        </div>
    )
}