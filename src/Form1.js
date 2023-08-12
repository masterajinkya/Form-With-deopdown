import React, { useEffect, useState } from 'react'

function Form1() {
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        contact: ''
    });

    const [data, setData] = useState([]);
    const [isPhone, setIsPhone] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, form])
    }


    const handleChange = (e) => {
        // console.log(e.target.value);
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(data);

    // const handlePhone = () => {
    //     setIsPhone(true)
    // }
    // const handleEmail=()=>{

    // }
    const [selected, setSelected] = useState("")

    const handleRadioChange = (e) => {
        setSelected(e.target.value)
    }

    useEffect(() => {
        if (data) {
            localStorage.setItem("data", JSON.stringify(data))
        }
    }, [data])

    return (
        <>
            <div className='container border border-black p-2 mt-4'>
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
                        <div className='col-6'>
                            <label >How should we contact you?</label><br />
                            <label className='m-2'>
                                <input className='m-2'
                                    type='radio'
                                    value="phone"
                                    onChange={handleRadioChange}
                                    // onClick={()=>setIsPhone(!isPhone)}
                                    onClick={() => setIsPhone(1)}

                                    checked={selected === "phone"}
                                />
                                Phone
                            </label>
                            <label>
                                <input className='m-2'
                                    type='radio'
                                    value="email"
                                    onChange={handleRadioChange}
                                    // onClick={()=>setIsEmail(!isEmail)}
                                    onClick={() => setIsPhone(2)}

                                    checked={selected === "email"}

                                />
                                Email
                            </label>
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
                        {isPhone === 1 ? <div className='col-6'>
                            <div className="form-group ">
                                <label >Phone</label>
                                <input className="form-control"
                                    type="text"
                                    name='contact'
                                    value={form.contact}
                                    onChange={handleChange}
                                />
                            </div>
                        </div> : ''}
                        {isPhone === 2 ? <div className='col-6'><div className="form-group ">
                            <label >Email</label>
                            <input className="form-control"
                                type="text"
                                name='contact'
                                value={form.contact}
                                onChange={handleChange}
                            />
                        </div>
                        </div> : ''}

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className='container border border-primary mt-4 p-3'>
                {/* {data.map((user, i) => {
                    return <div key={i}>
                        <h1>{user.fname}</h1>
                        <h1>{user.lname}</h1>
                        <h1>{user.contact}</h1>
                    </div>
                })} */}
                {data.map((user, i) => {
                    return <div className='row mt-2 py-2 border  shadow' key={i}>
                        <div className='col-3 border-right border-black'>{user.fname}</div>
                        <div className='col-3 border-right border-black'>{user.lname}</div>
                        <div className='col-6 '>{user.contact}</div>
                    </div>
                })}

            </div>

        </>
    )
}

export default Form1

