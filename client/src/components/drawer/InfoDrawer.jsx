import {Drawer, Typography,Box,styled} from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import Profile from "./Profile"

const Header = styled(Box)`
background-color: #008069;
height: 107px;
color: #FFFF;
display: flex;
 & > svg, & >p{
    margin-top: auto;
    padding: 18px;
    font-weight: 530;

 }
`
const Component = styled(Box)`
 background-color: #ededed;
 height: 85%;
`
const Text = styled(Typography)`
  font-size:18px;
`

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none',
}

const InfoDrawer = ({open,setOpen})=>{

    const handleClose = ()=>{
        setOpen(false);
    }
    return (
        <>
        <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{sx: drawerStyle}}
        style = {{zIndex: 1500}}
      >
        <Header>
          <ArrowBack onClick={()=>setOpen(false)}/>
          <Text>Profile</Text>
        </Header>
        <Component>
             <Profile />
        </Component>
      </Drawer>
        </>
    )
}

export default InfoDrawer;