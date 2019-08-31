import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/navbar';
import Link from 'next/link'

const PostList = () => (
  <>
  <NavBar/>
  <Container maxWidth="sm">
  <CssBaseline />
    <h1>Check out some choice posts</h1>
    <p>Exercitation velit ut laboris minim amet pariatur aliqua est. Ipsum cillum id consectetur commodo mollit commodo
       mollit veniam amet ad enim excepteur est laborum. Sunt in minim labore labore adipisicing eiusmod deserunt occaecat duis. 
       Et dolore mollit quis non magna veniam. Dolore cupidatat dolore ad mollit incididunt sunt dolor ipsum in aliqua consectetur culpa. Qui aliqua mollit velit ea Lorem nulla.</p>
    </Container>
    <Link href='/post/[id]' as='/post/first'>
          <a>First Post</a>
        </Link>
   
        <Link href='/post/[id]' as='/post/second'>
          <a>Second Post</a>
        </Link>
  </>
)

export default PostList