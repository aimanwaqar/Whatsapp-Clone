import {useContext,useState} from "react";
import {Box,styled} from "@mui/material";
import {Chat as MessageIcon, MoreVert} from "@mui/icons-material"
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 44px;
   background-color: #ededed;
   padding: 4px 8px;
   display: flex;
   align-items: center

`

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: gray;
  };
  & :first-child{
    font-size:22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`
const Image = styled('img')({
  height: 40,
  width: 40,
  borderRadius :'50%'

})

const Header = () =>{
   
    const {account} = useContext(AccountContext);

    const [openDrawer,setOpenDrawer] = useState(false);

    const toggleDrawer = ()=>{
      setOpenDrawer(true);
    }

    return (
        <>
          <Component>
            <Image src={account.picture} alt="dp" onClick={()=> toggleDrawer()}/>
            <Wrapper>
                <MessageIcon />
                <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapper>
          </Component>
          <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    );
}

export default Header;