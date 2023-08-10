import { FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { CONTACT } from './constant';


function Form() {



    const [form, setForm] = useState({
        fname: '',
        lname: '',
        contact: '',
        Select:'',
        // email:""
    });

    const [data, setData] = useState([]);
    // const [isPhone, setIsPhone] = useState(1);
    // const [isEmail, setIsEmail] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, form])
    }


    const handleChange = (e) => {
        console.log(e.target.value);
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(data);

    // const handlePhone = () => {
    //     setIsPhone(true)
    // }
    // const handleEmail=()=>{

    // }

    useEffect(() => {
        if (data) {
            localStorage.setItem("data", JSON.stringify(data))
        }
    }, [data])

    return (
        <>
            <div className='container border border-black p-2'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>

                        <div className='col-6'>
                            <div className="form-group ">
                                <label >First Name</label>
                                <input className="form-control"
                                    type="text"
                                    name='fname'
                                    value={form.fname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group ">
                                <label >Last Name</label>
                                <input className="form-control"
                                    type="text"
                                    name='lname'
                                    value={form.lname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='col-6 my-4'>
                            <FormControl size='small' fullWidth>
                                <InputLabel id="demo-simple-select-label">Choose</InputLabel>
                                <Select
                                    name='contact'
                                    value={form.Select}
                                    label="choose"
                                    onChange={handleChange}
                                >
                                    {CONTACT.map((contact)=>{
                                    return <MenuItem value={contact}>{contact}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>

                        </div>

                        {/* {isPhone && <div className='col-6'>
                            <div className="form-group ">
                                <label >{isPhone ? "Phone Number" : "Email"}</label>
                                <input className="form-control"
                                    type="text"
                                    name='contact'
                                    value={form.contact}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>} */}
                        {form.contact === "Phone" && <div className='col-6'>
                            <div className="form-group ">

                                <label >Phone</label>
                                <input className="form-control"
                                    type="text"
                                    name='phone'
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>}
                        {form.contact === "Email" && <div className='col-6'>
                            <div className="form-group ">

                                <label >Email </label>
                                <input className="form-control"
                                    type="text"
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>}

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {/* <div className='container border border-primary mt-4 p-3'> */}
                {/* {data.map((user, i) => {
                    return <div key={i}>
                        <h1>{user.fname}</h1>
                        <h1>{user.lname}</h1>
                        <h1>{user.contact}</h1>
                    </div>
                })} */}
                {/* {data.map((user, i) => {
                    return <div className='row mt-2 py-2 border  shadow' key={i}>
                        <div className='col-3 border-right border-black'>{user.fname}</div>
                        <div className='col-3 border-right border-black'>{user.lname}</div>
                        <div className='col-6 '>{user.contact}</div>
                    </div>
                })} */}

            {/* </div> */}

        </>
    )
}

export default Form



