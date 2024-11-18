import { Container } from 'react-bootstrap';
import { PageIDs } from '@/utilities/ids';

export default function Home() {
  return (
    <main>
      <div id={PageIDs.landingPage}>
        <div className="landing-green-background">
          <Container className="text-center">
            <h3 style={{ paddingBottom: '20px', color: 'white' }}>
              What are your plans for the weekend?
            </h3>
          </Container>
        </div>
      </div>
    </main>
  );
}
