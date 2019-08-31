import { useRouter } from 'next/router'
import Link from 'next/link'
import NavBar from '../../../components/navbar';
const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <NavBar />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href='/post/[id]/[comment]' as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href='/post/[id]/[comment]' as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Post