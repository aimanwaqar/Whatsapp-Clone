import {Box,styled,Typography} from "@mui/material"
import {useContext} from "react"
import { AccountContext } from "../../context/AccountProvider"

const ImageContainer = styled(Box)`
display: flex;
justify-content: center;

`
const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '21px 0'
})

const BioWrapper = styled(Box)`
  background-color: #FFFFFF;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.08);
  & :first-child{
    font-size
        color: #13px;
        font-weight: 200;
  }
    & :last-child{
        margin: 14px 0;
        color: gray;
    }
  }
`
const DescriptionConatiner = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p{
    font-size: 13px;
    color: #8696a0;
  }
`

const Profile =()=>{


    const {account} = useContext(AccountContext);
    return(
        <>
           <ImageContainer>
               <Image src={account.picture} alt="dp" />
           </ImageContainer>
           <BioWrapper>
               <Typography>Your name</Typography>
               <Typography>{account.name}</Typography>
           </BioWrapper>
           <DescriptionConatiner>
               <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
           </DescriptionConatiner>
           <BioWrapper>
               <Typography>Your name</Typography>
               <Typography>Have a Good Day!!</Typography>
           </BioWrapper>
        </>
    )
}

export default Profile;