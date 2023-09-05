import {Box, Typography, styled} from "@mui/material"
import {Search, MoreVert} from "@mui/icons-material"



const Header = styled(Box)`
 height: 36px;
 background-color: #ededed;
 padding: 8px 50px 8px 16px;
 display: flex;
 align-items: center;

  
`;

const Image = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%',

});

const Name = styled(Typography)`
   margin-left: 12px !important;
`

const Status = styled(Typography)`
   margin-left: 12px !important;
   font-size: 12px;
   color: rgb(0,0,0,0.6);
`

const RightContainer = styled(Box)`
   margin-left: auto;
`

const ChatHeader = ({ person })=>{
    return (
        <>
           <Header>
            <Image src={person.picture} alt="" />
            <Box>
                <Name>{person.name}</Name>
                <Status>Online</Status>
            </Box>
            <RightContainer>
               <Search />
               <MoreVert />
            </RightContainer>
           </Header>
        </>
    )
}

export default ChatHeader;