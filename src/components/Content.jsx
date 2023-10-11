import { Box,styled,Typography} from "@mui/material";
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'

const Container=styled(Box)({
    backgroundColor:'#26577C',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
    justifyContent: 'center',
    height:'87%',
  

})

const Row=styled(Box)(
    {
        width: 'calc(50% - 8px)', // Adjust this to control the width of each square
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxSizing: 'border-box',
        '@media (max-width: 767px)': {
          width: '100%', // On smaller screens, make them stack vertically
        },
    }
)
const Content= ({result})=>{
    return(
            result && Object.keys(result).length > 0 ?
            <Container>         
                <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
            <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
            <Row><Opacity />Humidity: {result.main.humidity}</Row>
            <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {result.weather[0].main}</Row>
            <Row><Cloud />Clouds: {result.clouds.all}%</Row>

            </Container>
            :null
        
    )
}

export default Content;