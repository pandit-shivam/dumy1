import React from 'react'
import { FaHome, FaUserFriends } from 'react-icons/fa'
import './NavbarStyle.css';
import { BiSolidMessageRoundedMinus,BiMoon } from "react-icons/bi"
import { IoIosNotificationsOutline } from "react-icons/io";
import SmallCard from './SmallCard';
import LargeCard from './LargeCard';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
                <div class="container-fluid navbar navbar-dark bg-primary">

                    <form class="ms-3 d-flex">
                        <b class="navbar-brand" href="#">FACEBOOK</b>
                        <input className="form-control bg-primary me-2" type="search" placeholder="Search" aria-label="Search" />
                        <FaHome className='custom-iconss22 ms-4 txt11 ' />
                        <FaUserFriends className='custom-iconss11 ms-4 txt11' />
                        {/* <button class="btn btn-outline-light" style={{ color: "black" }} type="submit">Search</button> */}
                    </form>
                    <div className='d-flex'>
                        <div>
                            <b className='me-5 txt11 shadow'>326 Total posts</b>
                        </div>
                        <div>
                            <b className='me-5 txt11 shadow'>3245 Total Friends</b>
                        </div>
                        <div>
                            <BiSolidMessageRoundedMinus className='custom-iconss33 me-4'/>
                        </div>
                        <div>
                            <BiMoon className='custom-iconss33 me-4'/>
                        </div>
                        <div>
                            <IoIosNotificationsOutline className='custom-iconss33 me-4'/>
                        </div>
                        <div className='me-3'>
                            <img  src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img333'/>
                            <b className='txt11'>Josephin water</b>
                        </div>
                    </div>
                </div>
            </nav>
            <SmallCard/>
            <LargeCard/>
        </div>
    )
}

export default Navbar