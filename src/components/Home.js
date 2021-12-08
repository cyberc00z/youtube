import React, { useState } from "react";
import "./Home.css";
import {Form, Button} from "react-bootstrap";
// import MapPicker from 'react-google-map-picker';
import axios from "axios";


const DefaultLocation = {lat : 10, lng: 106};
const DefaultZoom = 10;

const Home = () => {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);
    const [location, setLocation] = useState(defaultLocation);
    const [searchTag, setSearchTag] = useState('');
    const [country, setCountry]  = useState('');
    const [language, setLanguage] = useState('');
     const [name, setName] = useState('');
    /**
     * 
     * handle the map  
     */
    const handleSubmit = (e) => {
          // console.log(e.target.value);
          e.preventDefault()
          axios
            .get("http://127.0.0.1:8000/")
            .then((res) => {
              console.log(res);
            }).catch((error) => {
              console.log(error);
            })
      }

    const handleChangeLocation = (lat, lng) => {
        setLocation({lat:lat, lng:lng});
    } 

    const handleChangeZoom = (newZoom) => {
        setZoom(newZoom)
    }
    
    /*
    const handleResetLocation = () => {
        setDefaultLocation({...DefaultLocation})
        setZoom(DefaultZoom);
    }*/


    return (
       <div className="home__class">
         <div className="home__form">
             
              
        <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group id="name">
                <Form.Label>Name : </Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Search" value={name} onChange={(e) => setName(e.target.value)} required  />
            </Form.Group>
                <Form.Group id="tag" >
                  <Form.Label>
                      Filters 
                  </Form.Label>
                  <Form.Control type="text" placeholder="filter by tag" value={searchTag} onChange={(e) => setSearchTag(e.target.value)} />
                </Form.Group>
                <Form.Group id="searchCountry">
                  <Form.Label>
                    Choose Country 
                  </Form.Label>
                  <Form.Control type="text" placeholder="Choose Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </Form.Group>
                <Form.Group id="searchRadius" >
               <Form.Label>Choose Radius</Form.Label>
               
               <Form.Control as="select" >
                    <option className="d-none" value="">
                      Select Radius : 
                    </option>
                    {["1-10", "10-20", "20-30","30-40" ,"40-50", "50-60"].map(option => (
                         <option key={option}> {option} km</option>
                    ))}
               </Form.Control>
          </Form.Group>
          {/* <MapPicker className="home__map"
                  defaultLocation={defaultLocation}
                  zoom={zoom}
                  mapTypeId="roadmap"
                  style={{height:'300px', width:'400px', position:"relative"}}
                  onChangeLocation={handleChangeLocation}
                  onChangeZoom={handleChangeZoom}
                  apiKey='AIzaSyCCeTyK47JFZfmYgX12Iv5mNYP-QB54HZc'
                /> */}
          <Form.Group id="resetLocation" >
              <Form.Label>
                  Latitude : 
              </Form.Label>
              <Form.Control type="text" placeholder="Longitude" value={location.lat} disabled />
               <Form.Control type="text" placeholder="Latitude" value={location.lng}  disabled /> 
          </Form.Group>
            <Form.Group id="ageGroup" >
               <Form.Label>Age Group</Form.Label>
               <Form.Control as="select" className="rounded-0">
                    <option className="d-none" value="">
                         Select Age : 
                    </option>
                    {["18-25", "26-35", "36-45", "45-51", "52-60"].map(option => (
                         <option key={option}> {option}</option>
                    ))}
               </Form.Control>
          </Form.Group>
            <Form.Group className="mb-3" id="language">
                <Form.Label>Translation Language : </Form.Label>
                    <Form.Control type="text" placeholder="Choose Language" value={language} onChange={(e) => setLanguage(e.target.value)}  />
            </Form.Group>
                <Form.Group  id="normalEmail" >
                  <Form.Label>
                    Post Message                        
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Write your message here"
                    style={{height:"100px"}}
                  />
                </Form.Group>
                <Form.Group  id="translatedEmail" >
                  <Form.Label>
                    Message After Translation                        
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{height:"100px"}}
                  />
                </Form.Group>
                <div className="form__btn">
                <Button className="w-50" variant="primary" type="submit">
                        Send Emails
                </Button>
                </div>
            </Form>
         </div>
       </div>
    )
}

export default Home;