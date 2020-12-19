export interface Event {
    id: string;
    name: string;
    duration: string;
    peopleNum: number;
    date?: Date;
    status? : 'finished' | 'cancelled';
}