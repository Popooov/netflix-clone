import { Header } from "../components"
import * as ROUTES from '../constants/routes'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo 
                    to={ROUTES.HOME}
                    src='/images/misc/logo.svg'
                    alt='Netflix'
                />
                <Header.ButtonLink>
                    
                </Header.ButtonLink>
            </Header.Frame>
        </Header>
    )
}