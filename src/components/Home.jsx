import { Box,styled } from "@mui/material";
import Bg from '../Images/bg.jpg';
import Content from "./Content";
import Form from "./Form";
import { useState } from "react";

const Component=styled(Box)({
    height:'100vh',
    display:'flex',
    alignItems:'center',
    margin:'0 auto',
    width:'65%'
})
const Image=styled(Box)({
    backgroundImage:`url(${Bg})`,
    width:'27%',
    height:'80%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px'
})
function Home(){
    const [result,setResult]=useState({})
    return(
        <Component>
            <Image></Image>
            <Box style={{width:"73%",height:"80%"}}>
                <Form setResult={setResult}/>
                <Content result={result}/>
            </Box>
        </Component>
    )
}

export default Home;