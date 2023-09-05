import {useContext} from 'react';
import {Box,Typography,styled} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation } from '../../../service/api.js';
const Component = styled(Box)`
display: flex;
height: 45px;
padding: 13px 0;
cusror: pointer;

`;

const Name = styled(Typography)`
margin-top: 15px;

`
const Image = styled('img')({
   width: 50,
   height: 50,
   borderRadius: '50%',
   padding: '0 14px',

});


const Conversation = ({ user })=>{
  const {setPerson,account} = useContext(AccountContext);

  const getUser = async() =>{
      setPerson(user);
      await setConversation({senderId: account.sub, receiverId: user.sub})
  }

   return (
    <>
     <Component onClick={()=> getUser()}>
        <Box>
            <Image src={user.picture} alt="dp" />
        </Box>
        <Box>
           <Name>{user.name}</Name>
        </Box>

     </Component>
       
    </>
   );
}

export default Conversation;