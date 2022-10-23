import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import '../../styles/Sidebar.css'

const Sidenav = () => {
  return (
   
    <Row className="text-start py-5 px-3">
        <Link className="list-text mb-4">Explore</Link>
        <Link className="list-text mb-4">History</Link>
        <Modal className="list-text text-start fs-4" modalTitle="Add Data" buttonName="Add Data"></Modal>
    </Row>
  )
}

export default Sidenav