import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {HttpService} from '../../../shared/services/http-service';
import {MusicBoard} from '../../../shared/shared.dependencies';
import moment from 'moment';

@Component({
    selector   : 'app-show-list',
    templateUrl: './show-list.component.html',
    styleUrls  : ['./show-list.component.scss'],
})
export class ShowListComponent implements OnInit, OnDestroy {

    subscriptions: Subscription[] = [];
    events: MusicBoard.Interface.IEvent[]                 = [];
    colorList: string[] = ['#9c53f4', '#f41146', '#9d9a4e', '#b66a47', '#950c78', '#5f09a9', '#93a8cf', '#c71ad7', '#211c5c', '#829bb6', '#301319', '#fba4e9', '#46a5ed', '#e39877', '#89dd8d', '#a3e081', '#f38a92', '#f86c9a', '#caa2e5', '#cac722', '#5c5ecd', '#57fdd6', '#e29484', '#c057fd', '#f1dc8e', '#b48ef1', '#e77db6', '#51baee', '#e2a678', '#7fc664', '#6adbc4', '#7589d7', '#ff4343', '#8670ea', '#f18e8e', '#dba34c'];

    constructor(private httpService: HttpService) {

    }

    ngOnInit(): void {
        const sub = this.httpService.firebaseGet('event').subscribe(data => {
            this.events = [];
            this.events = data.map(e => {
                return {
                    FirebaseID: e.payload.doc.id,
                    Artist    : e.payload.doc.data()['artist'],
                    CreatedAt : e.payload.doc.data()['createdAt'],
                    EventTime : moment(new Date(e.payload.doc.data()['eventTime'])).format('DD MMM YYYY'),
                    TicketUrl : e.payload.doc.data()['ticketUrl'],
                    Venue     : e.payload.doc.data()['venue'],
                    StyleColor: this.colorList[this.getRandomIntInclusive(0, this.colorList.length - 1)]
                } as MusicBoard.Interface.IEvent;
            }).sort((a: MusicBoard.Interface.IEvent, b: MusicBoard.Interface.IEvent) => {
                return a.CreatedAt > b.CreatedAt ? 1 : b.CreatedAt > a.CreatedAt ? -1 : 0
            });

            sub.unsubscribe();
        });
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
    }

    getRandomIntInclusive(_Min: number, _Max: number): number {
        _Min = Math.ceil(_Min);
        _Max = Math.floor(_Max);
        return Math.floor(Math.random() * (_Max - _Min + 1) + _Min);
    }

    removeEvent(_Event: MusicBoard.Interface.IEvent): void {
        this.httpService.firebaseDelete('event', _Event.FirebaseID);
        this.events.splice(this.events.indexOf(_Event), 1);
    }
}
