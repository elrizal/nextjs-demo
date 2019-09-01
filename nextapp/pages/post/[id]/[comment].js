import { useRouter } from 'next/router'
import Layout from '../../layout';
import Container from '@material-ui/core/Container';

const Comment = () => {
  const router = useRouter()
  const { id, comment } = router.query

  return (
    <>
    <Layout>
      <Container maxWidth="sm">
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
      </Container>
   
    </Layout>
    </>
  )
}

export default Comment