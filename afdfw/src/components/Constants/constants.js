
export const MeetupPicsAPI = "https://api.meetup.com/asian-friends-of-dfw/photos";

export const MeetupEventsAPI = "https://api.meetup.com/asian-friends-of-dfw/events"

export const GetPics = `
query photos {
    photos {
        id
        highres_link
    }
}
`;

export const GetEvevnts = `

query events {
    events {
        id
        name
        local_date
        local_time
        
    }
}


`