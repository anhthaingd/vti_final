import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import Header from './Header';
import ViewGroup from './ViewGroup';

export default function App() {
  return (
    <header>
      <Header/>
    </header>
  );
}