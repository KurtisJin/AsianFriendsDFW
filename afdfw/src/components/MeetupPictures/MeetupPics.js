import React, { useEffect, useState } from 'react';
import * as Constants from '../Constants/constants';
import API from '../../Utils/API';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';

let MeetUpPics = () => {

    const [data, setData] = useState({photos: []})

    useEffect( () => {
        let fetchData = async () => {

            const queryResult = await axios.post (
                Constants.MeetupPicsAPI, {
                    query: Constants.GetPics
                }
            )
                const result = queryResult.data;
                setData({ photos: results.highres_link })

        }
        fetchData();

    })

    return (
        <div className="event-pics">
            <ul>
                {data.photos.map(item => (
                    <Carousel>
                        
                    </Carousel>
                    ))}
            </ul>
        </div>

    );

}

export default MeetUpPics