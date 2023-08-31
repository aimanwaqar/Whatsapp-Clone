import { Dialog,Box,Typography,List,ListItem,styled } from "@mui/material";
import { qrCodeImage } from "../constants/data";
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const dialogStyle = {
    height: '90%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const Component =styled(Box)`
display: flex;
`
const Container = styled(Box)`
padding: 56px 0 56px 56px;
`
const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '56px 0 0 130px',
});

const Title = styled(Typography)`
 font-size: 26px;
 color: #525252;
 font-weight: 300;
 font-family: inherit;
 margin-bottom: 25px;
`

const LoginDialog =() =>{
const onLoginSuccess = (res) =>{
   const decoded = jwt_decode(res.credential);
   console.log(decoded);
}

const onLoginError = (res) =>{
    console.log("Error on login", res);
}
 
    return (
       <>
         <Dialog open={true} PaperProps={{sx: dialogStyle}}>
             <Component>
                <Container>
                   <Title>To use WhatsApp on your computer</Title>
                   <List>
                       <ListItem>1. Open WhatsApp on your phone</ListItem>
                       <ListItem>2. Tap Menu Setting and select WhatsApp web</ListItem>
                       <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                   </List>

                </Container>
                <Box style={{position:'relative'}}>
                      <QRCode src={qrCodeImage} alt="QR Code" />
                      <Box style={{position: 'absolute',top:'50%',transform:'translateX(95%)',}}>
                         <GoogleLogin
                          onSuccess={onLoginSuccess} 
                         onError={onLoginError}
                         />
                      </Box>
                </Box>
             </Component>
         </Dialog>
       </>
    );
}

export default LoginDialog;