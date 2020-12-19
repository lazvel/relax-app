import { Event } from './event.model';


export class EventService {
    private events : Event [] = [
        { id: 'sport', name: 'Teniski tereni', duration: '1h 30min', peopleNum: 4, date: new Date('Jul 19, 2019 13:15:30'), status: 'finished'},
        { id: 'zabava', name: 'Bazeni 25.maj', duration: '09:00 - 19:00', peopleNum: 250, date: new Date('Jun 3, 2020'), status: 'cancelled'},
        { id: 'muzika', name: 'EXIT Festival', duration: '3 days', peopleNum: 50000, date: new Date(), status: 'cancelled'},
        { id: 'zabava', name: 'Planina Durmitor', duration: '5 days', peopleNum: 10, date: new Date(), status: 'finished'},
        { id: 'zabava', name: 'Belgrade BeerFest', duration: '7 days', peopleNum: 10000, date: new Date('August 15, 2019 '), status: 'finished'},
        { id: 'sport', name: 'Kosarkaski kamp Teo4', duration: '7 days', peopleNum: 150, date: new Date('Jul 22, 2019 '), status: 'cancelled'}
    ]

    getEvents() {
        return this.events;
    }
}