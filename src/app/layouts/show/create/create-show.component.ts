import {Component, OnInit} from '@angular/core';
import {MusicBoard} from '../../../shared/shared.dependencies';
import {HttpService} from '../../../shared/services/http-service';
import {Router} from '@angular/router';

@Component({
    selector   : 'scout-create-show',
    templateUrl: './create-show.component.html',
    styleUrls  : ['./create-show.component.scss'],
})
export class CreateShowComponent implements OnInit {

    event: MusicBoard.Interface.IEvent = new MusicBoard.Class.Event();

    constructor(private httpService: HttpService, private router: Router) {

    }

    ngOnInit(): void {
    }

    createEvent(): void {
        this.httpService.firebaseCreate('event', this.event.createToDatabase()).then((resp) =>{
            this.router.navigate(['/show/list']);
        });
    }

}

