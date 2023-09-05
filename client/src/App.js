import { GoogleOAuthProvider } from '@react-oauth/google';
import Messsenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '500452612560-e73hfa01hgleld8vjg5kqb9r1sph3q8r.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messsenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
