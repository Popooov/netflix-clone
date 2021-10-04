import { JumbotronContainer } from "../containers/jumbotron"
import { OptForm } from "../components"
import { FooterContainer } from "../containers/footer"
import { FaqsContainer } from "../containers/faqs"
import { HeaderContainer } from "../containers/header"

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>
                        Ready to watch? Enter your email or restart your membership
                    </OptForm.Text>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}