import React, { useState } from "react";
import "./Home.css";
import {Form, Button, Card, Alert} from "react-bootstrap";
import MapPicker from 'react-google-map-picker';


const DefaultLocation = {lat : 10, lng: 106};
const DefaultZoom = 10;

const Home = () => {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);
    const [location, setLocation] = useState(defaultLocation);

    const handleSubmit = (e) => {
           console.log(e.target.value);
    }
    const handleChangeLocation = (lat, lng) => {
        setLocation({lat:lat, lng:lng});
    } 

    const handleChangeZoom = (newZoom) => {
        setZoom(newZoom)
    }

    const handleResetLocation = () => {
        setDefaultLocation({...DefaultLocation})
        setZoom(DefaultZoom);
    }


    return (
       <div className="home__class">
         <div className="home__form">
             <Card>
               <Card.Body>
        <Form className="w-50" onSubmit={handleSubmit}>
            <Form.Group id="formBasicName">
                <Form.Label>Name : </Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Search" required />
            </Form.Group>
                <Form.Group id="formBasicName" >
                  <Form.Label>
                      Keyword :
                  </Form.Label>
                  <Form.Control type="text" placeholder="Search by tag"  />
                </Form.Group>
                <Form.Group id="formBasicName" >
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
          <Form.Group id="formResetLocation" >
              <Form.Label>
                  Latitude : 
              </Form.Label>
              <Form.Control type="text" placeholder="Longitude" value={location.lat} disabled />
               <Form.Control type="text" placeholder="Latitude" value={location.lng}  disabled /> 
          </Form.Group>
            <Form.Group id="formBasicName" >
               <Form.Label>Age Group</Form.Label>
               <Form.Control as="select" className="rounded-0 shadow">
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
                    <Form.Control type="text" placeholder="Choose Language"  />
            </Form.Group>
                <Form.Group  id="formTextArea" >
                  <Form.Label>
                    Post Message                        
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Write your message here"
                    style={{height:"100px"}}
                  />
                </Form.Group>
                <Form.Group  id="formTextArea" >
                  <Form.Label>
                    Message After Translation                        
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{height:"100px"}}
                  />
                </Form.Group>
                <MapPicker
                  defaultLocation={defaultLocation}
                  zoom={zoom}
                  mapTypeId="roadmap"
                  style={{height:'300px', width:'400px', position:"relative"}}
                  onChangeLocation={handleChangeLocation}
                  onChangeZoom={handleChangeZoom}
                  apiKey='AIzaSyCCeTyK47JFZfmYgX12Iv5mNYP-QB54HZc'
                />
                <Button className="w-100 mt-4" variant="primary" type="submit">
                        Send 
                </Button>
            </Form>
            </Card.Body>
        </Card>
         </div>
       </div>
    )
}

export default Home;