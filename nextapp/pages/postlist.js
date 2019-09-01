import Container from '@material-ui/core/Container';
import ImgCard from '../components/card';
import Layout from './layout';

const PostList = () => (
  <>
  <Layout> 
    <Container maxWidth="sm">
        <h1>Check out some choice posts</h1>
        <p>Exercitation velit ut laboris minim amet pariatur aliqua est. Ipsum cillum id consectetur commodo mollit commodo
        mollit veniam amet ad enim excepteur est laborum. Sunt in minim labore labore adipisicing eiusmod deserunt occaecat duis. 
        Et dolore mollit quis non magna veniam. Dolore cupidatat dolore ad mollit incididunt sunt dolor ipsum in aliqua consectetur culpa. Qui aliqua mollit velit ea Lorem nulla.</p>
    <h2>Recents:</h2>
    <ImgCard/>
    </Container>
  </Layout>
  </>
)

export default PostList