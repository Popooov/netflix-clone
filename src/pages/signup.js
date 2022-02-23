import { useState } from "react"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { Form } from "../components"

export default function SignUp() {
    const [ firstName, setFirstName ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error ] = useState('')

    const isInvalid = firstName === '' | password === '' | emailAddress === ''

    const handleSignUp = e => e.preventDefault()

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Un</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method='POST'>
                        <Form.Input
                            placeholder='First Name'
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input 
                            placeholder='Email Address' 
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            autocomplete='off'
                            placeholder='Password' 
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user? <Form.Link to='/signin'>Sign in</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}