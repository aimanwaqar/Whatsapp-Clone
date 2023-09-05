import { emptyChatImage } from "../../constants/data";

import {Box, Divider, Typography,styled} from "@mui/material"
const Component = styled(Box)`
  background-color: #f8f9fa;
  padding: 30px 0;
  height: 100vh;

`

const Container = styled(Box)`
  padding:0 340px;

`

const Image = styled('img')({
   width: 400,
   marginTop: 100,
   marginLeft: 50,

})

const Title = styled(Typography)`
  font-size: 32px;
  margin:25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  text-align: center;

`
const SubTitle = styled(Typography)`
   font-size: 14px;
   color: #667781;
   font-weight: 400;
   font-family: inherit;
   text-align: center;
`

const StyledDivider = styled(Divider)`
   margin: 40px 0;
  opacity: 0.4;
`

const EmptyChild = () =>{
    return(
        <>
           <Component>
              <Container>
                <Image src={emptyChatImage} alt="image" />
                <Title>Download WhatsApp for Windows</Title>
                <SubTitle>Make calls, share your screen and get a faster experience when you download the Windows app.</SubTitle>
                <StyledDivider />
              </Container>
           </Component>
        </>
    )
}

export default EmptyChild;