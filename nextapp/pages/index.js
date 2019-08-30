import Header from '../components/header'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/navbar';

const Home = () => (
  <>
  <NavBar/>
  <Container maxWidth="sm">
  <CssBaseline />
    <Header />
    <h1>Hello World!</h1>
    </Container>
  </>
)

export default Home