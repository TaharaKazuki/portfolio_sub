import BaseLayout from '../components/layouts/BaseLayout'
import { Container, Button } from 'reactstrap'

export default function Home() {
  return (
    <BaseLayout>
      <Container>
        <Button color="danger">Danger</Button>
        <div className="parent-class sibling-class">
          <h1>Hi there student</h1>
          <h2>Hi there students</h2>
          <div className="parent-class-title">Hello world</div>
          <div className="parent-class-date">2000</div>
        </div>
      </Container>
    </BaseLayout>
  )
}
