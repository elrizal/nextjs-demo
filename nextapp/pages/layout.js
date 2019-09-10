import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/navbar/navbar';

export default function Layout(props) {
    return (
        <>
        <CssBaseline/>
          <NavBar/>
          {props.children}
          footer?
        </>
    )
}
