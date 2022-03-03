import { Header } from "../components"
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from "./footer"
import { useState } from "react"

export function BrowseContainer() {
    const [ profile, setProfile ] = useState({})
    const user = {
        displayName: 'Karl',
        photoUrl: '1'
    }

    return profile.displayName 
    ? (
        <>
            <FooterContainer></FooterContainer>
        </>
    ) : (
        <SelectProfileContainer user={user} serProfile={setProfile} />
    )
}