import {useContext} from 'react';

import { Dialog,styled,Box } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChild from "./chat/EmptyChild";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from '../../context/AccountProvider';

const dialogStyle = {
  height: '96%',
  width: '100%',
  margin: '20px',
  borderRadius :'none',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'
}

const Component = styled(Box)`
  display:flex;
`
const LeftComponent =styled(Box)`
min-width:450px;

`
const RightComponent =styled(Box) `
  width: 73%;
  min-width: 300px;
  height:100%;
  border-left: 1px solid rgba(0,0,0,0.14);
`

const ChatDialog = ( )=>{

   const {person} = useContext(AccountContext);
    return (
        <> 
          <Dialog
              open = {true}
              PaperProps={{sx: dialogStyle}} hideBackdrop={true}
              maxWidth={'md'}
           > 
             <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>

                 {
                   Object.keys(person).length ? <ChatBox /> : <EmptyChild />
                 }
                </RightComponent>
             </Component>

          </Dialog>
        </>
    );
}

export default ChatDialog;