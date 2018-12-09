import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { QueueDataSource } from './queue-datasource';
import { PatientQueueService} from '../service/patient-queue.service'; 
import { Patient_queue } from '../model/Patient_queue'; 
import { Speek } from '../../lib/app/Speek'; 

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: QueueDataSource;
  empty: boolean = false; 
  displayedColumns = ['reg_id', 'humanWaitingTime', 'room'];

  constructor(private _queue: PatientQueueService){}

  ngOnInit() {
  
    this.dataSource = new QueueDataSource(this.paginator, this.sort, []);
    this.update(); 
    setInterval(
      ()=> {
        this.update(); 
      }, 20000
    ); 
    
  }

  update() {
    this._queue.queue_list().subscribe(
      (responce) => {
        this.dataSource = new QueueDataSource(this.paginator, this.sort, responce); 
        this.empty = (responce.length == 0); 
        responce.forEach((e)=>{
          if(e._call == 1){
            let s = new Speek; 
            s.speek("Id number "+e.patient.reg_id+" please go to room "+e.physician.room_number); 
          }
        }); 
      }
    )
  }
}
