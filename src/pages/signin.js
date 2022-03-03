import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from '../context/firebase'
import { Form } from "../components"
import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import * as ROUTES from '../constants/routes'

export default function SignIn() {
    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()
    const [ error, setError ] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' | emailAddress === ''

    const handleSignIn = e => {
        e.preventDefault()
        firebase.auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('')
                setPassword('')
                setError('')
                history.push(ROUTES.BROWSE)
            }).catch(error => setError(error.message))
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method='POST'>
                        <Form.Input
                            placeholder='Email address'
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type='password'
                            placeholder='Password'
                            autocomplete='off'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to='/signup'>Sign up now</Form.Link>
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