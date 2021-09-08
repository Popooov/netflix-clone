import Jumbotron from "../components/jumbotron"
import jumboData from '../fixtures/jumbo.json'

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
        {jumboData.map(({ id, direction, title, subTitle, image, alt }) => (
            <Jumbotron key={id} direction={direction}>
                <Jumbotron.Title>{title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
                <Jumbotron.Image src={image} alt={alt} />
            </Jumbotron>
        ))}
        </Jumbotron.Container>
    )
}