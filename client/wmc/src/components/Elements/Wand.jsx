import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export default function Wand() {

    const [wand, setWand] = useState([]);

    const getWands = async () => {

        try {
            const res = await axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/users/getWands`);

            console.log(res.data);
            setWand(res.data.wands);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getWands();
    }, [])

    return (
        <div>
            <Navbar />
            <div className='row'>
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 text-light">
                    <h1 className='mb-5'>Wands</h1>
                    {/* Display books in form of cards */}
                    <div className="row">
                        {wand.map((w) => (
                            <div key={w._id} className='col-md-4 mb-5'>
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={w.image_url} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{w.owner}</h5>
                                        <p className="card-text">{w.description.substring(1, 100) + "..."}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
