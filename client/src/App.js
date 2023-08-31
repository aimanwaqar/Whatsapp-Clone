import { GoogleOAuthProvider } from '@react-oauth/google';
import Messsenger from './components/Messenger';

function App() {

  const clientId = '500452612560-e73hfa01hgleld8vjg5kqb9r1sph3q8r.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
       <Messsenger />
    </GoogleOAuthProvider>
  );
}

export default App;
