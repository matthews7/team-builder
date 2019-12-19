import React, {useState} from "react";




export default function Form (props){
    const [member, setMember]= useState({
        name: "",
        email: "",
        role: ""

    });

    const handleChanges = e =>{
        setMember({
            ...member, 
            [e.target.name] : e.target.value
        });
        // console.log(e.target.value)
    };

    const submitForm = e =>{
        e.preventDefault();
        props.addTeamMember(member);
        setMember({name: "", email: "", role: ""});
    };

    return(
        <div>
            <form className="form" onSubmit={submitForm}>
                <label> Name:
                    <input
                    id="name" 
                    type="text"
                    placeholder="Name"
                    onChange={handleChanges}
                    name="name"
                    value={member.name}
                    />
                </label>

                <label>Email:
                    <input 
                    id="email" 
                    type="text"
                    placeholder="Email"
                    onChange={handleChanges}
                    name="email"
                    value={member.email}
                    />
                </label>

                <label>Role:
                    <input
                    id="role" 
                    type="text"
                    placeholder="Role"
                    onChange={handleChanges}
                    name="role"
                    value={member.role}
                    />
                </label>

                <button type="submit">Add Member</button>

            </form>
        </div>
    )
}