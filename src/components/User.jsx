import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import tel from '../image/telephone.png';
import gmail from '../image/gmail.png';
import day from '../image/birthday-cake.png';
import country from '../image/countries.png';
import team from '../image/people.png';

const User = () => {
    
    const[user,setUser]=useState("");
    const getUsers = ()=>{
       fetch("https://randomuser.me/api/").then((res)=> res.json()).then((data)=>setUser(data.results[0]));
    };
    useEffect(()=>{
        getUsers();
    },[]);
    console.log(user);
    const {name,location,cell,dob,email,picture}=user;
    return(
        <div className="all">
            

        <div className="imgdiv">
            <img src={team} alt="team" className="imgheader" />
            <h1 className="header">OUR TEAM</h1>
            <img src={team} alt="team" className="imgheader" />
        </div>
        
        <Card style={{ width: '18rem' }} className="cards">
        <Card.Img variant="top" src={picture?.large} />
        <Card.Body>
            <Card.Title>{name?.first} {name?.last}</Card.Title>
            
        </Card.Body>
        <ListGroup className="list-group-flush">
            <div className="imgdiv">
                <img src={country} alt="country" className="img"/>
                <ListGroup.Item>
                {location?.country}
                </ListGroup.Item> 
            </div>
            <div className="imgdiv">
                <img src={tel} alt="tel" className="img"/>
                <ListGroup.Item>{cell}</ListGroup.Item>
            </div>
            <div className="imgdiv">
                <img src={day} alt="bday" className="img"/>
                <ListGroup.Item>{new Date(dob?.date).toLocaleDateString()}</ListGroup.Item>
            </div>
            <div className="imgdiv">
                <img src={gmail} alt="gmail" className="img"/>
                <ListGroup.Item>{email}</ListGroup.Item>
            </div>
            
        </ListGroup>
       <Button className="btn"onClick={getUsers}>NEXT</Button>
        </Card>


        </div>
    )
};

export default User;