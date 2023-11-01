import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    InputLeftAddon,
    InputGroup,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import './Signup.css'
import bgVideo from './signupbg.mp4'
const Signup = () => {
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
                <div className="form-container">
                    <FormControl style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                        <h1 className='App-Name' style={{ fontWeight: 'bold' }}>Cisco Task Management Application</h1>
                        <small className='App-Description'>Manage your routinely Tasks with ease</small>
                    </FormControl>
                    <FormControl>
                        <div className="form-group">
                            <FormLabel className='FormLabel'>Full Name</FormLabel>
                            <Input id='name' type='text' placeholder='William Smith' />
                        </div>

                        <div className="form-group">
                            <FormLabel className='FormLabel'>Contact</FormLabel>
                            <InputGroup >
                                <InputLeftAddon children='+92' style={{ color: 'black' }} />
                                <Input id='contact' type='tel' placeholder='3XXXXXXXXX' />
                            </InputGroup>
                        </div>

                        <div className="form-group">
                            <FormLabel className='FormLabel'>Email address</FormLabel>
                            <Input id='email' type='email' placeholder='example@abc.com' />
                            <FormHelperText style={{ color: 'white' }}>We'll never share your email.</FormHelperText>
                        </div>

                        <div className="form-group icon-outerbox">
                            <FormLabel className='FormLabel'>Create Password</FormLabel>
                            <Input id='password' type={showPass ? 'text' : 'password'} placeholder='Atleast 7-Alphabets' />
                            <ViewIcon style={{ display: showPass ? 'none' : '' }} onClick={passDisplay} className='icon-state' />
                            <ViewOffIcon style={{ display: !showPass ? 'none' : '' }} onClick={passDisplay} className='icon-state' />
                        </div>
                        <div className="form-group icon-outerbox">
                            <FormLabel className='FormLabel'>Confirm Password</FormLabel>
                            <Input id='cpassword' type={showPass ? 'text' : 'password'} placeholder='Atleast 7-Alphabets' />
                            <ViewIcon style={{ display: showPass ? 'none' : '' }} onClick={passDisplay} className='icon-state' />
                            <ViewOffIcon style={{ display: !showPass ? 'none' : '' }} onClick={passDisplay} className='icon-state' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button mt={5} colorScheme='purple'>Create account</Button>
                            <small style={{ marginInline: 'auto', marginTop: '5px', color: 'white' }}>already a member? <i className='login-btn'> <a href='/Sign-In'>Login</a></i> </small>
                        </div>
                    </FormControl>
                </div>

            </div>




        </>
    )
}

export default Signup
