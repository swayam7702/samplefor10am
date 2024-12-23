import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const SignupForm = () => {

    const [formData, setFormData] = useState({ 
        username:"",
        usermail:"",
        pass1:"",
        pass2:""})

    const [errors,setErrors] = useState({})


    function validateEmail(email){
        const emailRegex = /^[a-z.A-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;

        return emailRegex.test(email)

    }

    const validatePassword = (password)=>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;
        return passwordRegex.test(password)

    }

    const submitHandler = (e)=>{

        e.preventDefault()
      
        let errors = {}

        if(formData.username.trim()===""){
            errors.username = "Username Required!"
        }

        else if(formData.username.trim().length<3){
            errors.username = "Username Must be 3 Chars or More!"
        }

        if(formData.usermail.trim()===""){
            errors.usermail="User Email Required!"
        }
        else if(!validateEmail(formData.usermail)){
            errors.usermail = "Enter a valid email address!"
        }
        if(formData.pass1.trim()===""){
            errors.pass1 = "Password Required!"
        }
        else if(!validatePassword(formData.pass1)){
            errors.pass1 = "Password Should be 6 Chars & Needs To follow RegEx"
        }
        if(formData.pass2 !== formData.pass1){
            errors.pass2 = "Confirm Password Must be Same!"
        }



        setErrors(errors)

       

    }

    if(errors.length===0){
        console.log(formData)
    }

    const handleChange = (e)=>{
        const {name,value} = e.target

        setFormData({...formData,[name]:value})
    }

  return (
    <div className='form-parent'>
      <h1>Signup Form</h1>
        <Form onSubmit={submitHandler} className='w-50 '>
            <Form.Group className="mb-3">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name here...." name='username' onChange={handleChange} />
                {
                    (errors.username)&&<p className='text-danger'>{errors.username}</p>
                }
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text
                " placeholder="Enter email" name='usermail' onChange={handleChange}  />
                {
                    (errors.usermail)&&<p className='text-danger'>{errors.usermail}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='pass1' onChange={handleChange}/>
                {
                    (errors.pass1)&& <p className='text-danger'>{errors.pass1}</p>
                }
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="repeat password..." name='pass2' onChange={handleChange} />
                {
                    (errors.pass2)&& <p className='text-danger'>{errors.pass2}</p>
                }
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form> 

        {/* <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form> */}
    </div>
  )
}

export default SignupForm
