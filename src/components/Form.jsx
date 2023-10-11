import {TextField,Button,styled,Box,InputBase} from "@mui/material";
import { useState } from "react";
import Weather from "../services/api";

const Input=styled(InputBase)({
    padding:15,
    color:'#000000'
})
const Container=styled(Box)({
    backgroundColor:"#EBE4D1",
    paddingLeft:10
})
const But=styled(Button)({
    paddingLeft:10,
    color:'#E55604',
})


function Form(props){
    const [data,setData]=useState({city:"",country:""})

    function HandleChange(event){
        console.log(data);
        setData({...data,[event.target.name]:event.target.value});
    }

    const GetWeather= async()=>{
        let result=await Weather(data.city,data.country)
        props.setResult(result)
        console.log(result);
    }
    return(
        <Container>
            <Input
                onChange={HandleChange}
                name="city"
                placeholder="City"
            />
            
            <Input  
                onChange={HandleChange}
                name="country"
                placeholder="Country(optional)" 
            />
            <But onClick={GetWeather}>
                Check Weather
            </But>

        </Container>
    )
}

export default Form;