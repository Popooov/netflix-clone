import { Accordion, OptForm } from "../components"
import faqsData from '../fixtures/faqs.json'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map(({ id, header, body }) => (
                    <Accordion.Item key={id}>
                        <Accordion.Header>{header}</Accordion.Header>
                        <Accordion.Body>{body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    Ready to watch? Enter your email or restart your membership
                </OptForm.Text>
            </OptForm>
        </Accordion>
    )
}