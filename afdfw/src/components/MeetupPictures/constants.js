
export const MeetupPicsAPI = "https://api.meetup.com/asian-friends-of-dfw/photos";

export const MeetupEvents = "https://api.meetup.com/asian-friends-of-dfw/events"

export const GetPics = `
query photos {
    photos {
        id
        title
    }
}
`;

export const GetEvevnts = `

query events {
    events {
        id
        title
        
    }
}


`