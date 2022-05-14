import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Header from '../Komponentit/Header';
import { Button } from '@mui/material';

// Pdf-tiedoston lataamisfunctio ---- https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js
function Download() {

    fetch('https://thirdgearbcknd.herokuapp.com/api/vastaukset' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
    .then((response) => response.blob())
    .then((blob) => {
  
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `Raportit.pdf`,
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  }


export default function Vastaustenraportointi(props) {
   

    const url = 'https://thirdgearbcknd.herokuapp.com/api/kyselyt'    
    const [kyselyt, setKyselyt] = React.useState([]);
    

    const fetchData = () => {
        fetch(url) 
        .then(response => response.json())
        .then(data => {

            setKyselyt(data)
        }
            )
        .catch(err=>console.log(err));  
    }

    React.useEffect(() => {
        fetchData()
        }
     ,[])


 return (
        <div >
      
<div className="container">
      <Header />

      <Button variant="contained" onClick={Download}>Lataa</Button>

    </div>

            {kyselyt.map((kysely, i) => {
           
   
                return (
                <List
                sx={{                 
                    bgcolor: 'background.paper',
                    position: 'relative', 
                    width: '100%',                              
                  }}
                  
                  subheader={<ListSubheader sx={{ fontSize: 22 }}>{kysely.nimi}</ListSubheader>}
                >
                
                    <ListSubheader>
                    <Divider/>
                        {kysely.kysymykset.map((kysymys,i) => {
                            return(
                                <List>
                                    
                                    <ListItem  key={kysymys.id}> {kysymys.kysymysteksti}</ListItem > 
                                    <ListSubheader>                                        
                                    {kysely.vastaukset.map((vastaus,i) => {
                                    return( vastaus.kysymys.id === kysymys.id ? <ListItem  key={vastaus.id}><ListItemText primary={vastaus.vastaus}/></ListItem >:null )                                                                   
                                   } )}  
                                    <Divider/>                                 
                                    </ListSubheader>                               
                                </List>                                                
                                )
                        })} 
                    </ListSubheader>
                </List>)
            })}
        </div>       
          )
        }
    