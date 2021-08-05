import { React, useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ categoryHandler }) => {

    return (
        <div onClick={e => categoryHandler(e.target.id)} className='sidebar-container'>
            <p id='category1' >Mens</p>
            <p id='category2' >Womens</p>
            <p id='category3' >Children</p>
        </div>
    )
}

export default Sidebar
