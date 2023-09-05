import {useEffect,useState, useContext} from 'react'
import { getUsers } from '../../../service/api.js';
import Conversation from './Conversation';
import { Box,styled,Divider } from '@mui/material';
import {AccountContext} from '../../../context/AccountProvider'

const Component = styled(Box)`
   height: 81vh;
   overflow: overlay;
`

const StyleDivider = styled(Divider)`
   margin: 0 0 0  70px;
   background-color: #e9edef;
   opacity: 0.6;

`
const Conversations = ({text})=>{

    const [users, setUsers] = useState([]);

    const {account} = useContext(AccountContext);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              let response = await getUsers();
              console.log('Response from getUsers:', response);
              const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
              setUsers(filteredData);
            } catch (error) {
              console.error('Error fetching users:', error);
            }
          };
          fetchData();
    }, [text]);

    return (
        <>
            <Component>
                {
                    users.map(user => ( 
                         user.sub !== account.sub &&
                         <>
                          <Conversation user={user} /> 
                          <StyleDivider />
                          </> )
                    )
                }
            </Component>
        </>
    );
}

export default Conversations;