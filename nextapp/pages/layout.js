import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/navbar';

const Layout = (props) => {
    <>
      <NavBar/>
      {props.children}
    </>
}
export default Layout; 