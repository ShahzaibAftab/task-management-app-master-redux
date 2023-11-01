import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import './Signin.css'
import bgVideo from './signupbg.mp4'
const Signin = () => {
    const [showPass, setshowPass] = useState(false)

    const passDisplay = () => {
        setshowPass(!showPass)
    }
    return (
        <>

            <div className="bg-Video">
                <video autoPlay muted loop preload="auto">
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="form-contain">
                    <FormControl style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                        <small className='App-Desc'>Greetings! Welcome back</small>
                        <h1 className='AppName' style={{ fontWeight: 'bold' }}>Cisco Task Management Application</h1>
                        <small className='App-Desc'>Login here 🫣</small>
                    </FormControl>
                    <FormControl>
                        <div className="formGroup">
                            <FormLabel className='Form-Label'>Email address</FormLabel>
                            <Input id='email' type='email' placeholder='example@abc.com' />
                        </div>

                        <div className="formGroup icon-outerbox">
                            <FormLabel className='Form-Label'>Password</FormLabel>
                            <Input id='password' type={showPass ? 'text' : 'password'} placeholder='Enter Password' />
                            <ViewIcon style={{ display: showPass ? 'none' : '' }} onClick={passDisplay} className='icon-state' />
                            <ViewOffIcon style={{ display: !showPass ? 'none' : '' }} onClick={passDisplay} className='icon-state' />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button mt={5} colorScheme='purple'>Sign In</Button>
                            <small style={{ marginInline: 'auto', marginTop: '5px', color: '#74777c' }}>Don't have an account? <i className='login-btn'> <a href='/Sign-Up'><u>Create</u></a></i> </small>
                        </div>
                    </FormControl>
                </div>

            </div>




        </>
    )
}

export default Signin
