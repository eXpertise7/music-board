import moment from 'moment';

export namespace MusicBoard {

    export namespace Interface {

        export interface IEvent {
            FirebaseID: string;
            Artist: string;
            CreatedAt: string;
            EventTime: string;
            TicketUrl: string;
            Venue: string;
            StyleColor: string

            createToDatabase(): any;
        }

    }

    export namespace Class {

        export class Event implements MusicBoard.Interface.IEvent {
            FirebaseID: string = null;
            Artist: string     = '';
            CreatedAt: string  = '';
            EventTime: string  = '';
            TicketUrl: string  = '';
            Venue: string      = '';
            StyleColor: string = null;

            constructor() {

            }

            createToDatabase(): any {
                return {
                    artist: this.Artist,
                    createdAt: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss'),
                    eventTime: moment(this.EventTime).format('YYYY-MM-DDTHH:mm:ss'),
                    ticketUrl: this.TicketUrl,
                    venue: this.Venue
                }
            }
        }

    }

    export namespace ENUM {

    }
}
