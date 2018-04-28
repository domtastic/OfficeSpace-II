import React from 'react';
import SideBar from '../../components/sidebar/side-bar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/footer';
import CompanyCards from '../../components/card/card';
import AdminTable from '../../components/admin-table/admin-table';
import {Col, Row, Container, Card, CardBody, CardTitle} from 'reactstrap';
import ClientTable from "../../components/client-table/client-table";


import Basic from '../../components/dnd/dnd';
import UserForm from '../../components/form/form';
import Login from '../../pages/Home/login-page';
const Dashboard = () => (
    <div className="main-panel" style={{

  width: "calc(100%-280px)",
  height:"100vh",
  overflow: "auto",
  backgroundColor:"#fafcfe",
  minHeight: "100%",
  boxShadow: "0 30px 130px 0 rgba(90, 105, 116, 0.1)"
}}>

<SideBar/>

  <div className="content" style={{padding:"10px", marginLeft:"300px"}}>

 <Col md="12">
 

<Basic/>


</Col>
</div>
<Footer/>
</div>

);

export default Dashboard;