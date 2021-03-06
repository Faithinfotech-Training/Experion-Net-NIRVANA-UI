import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import {AppService} from 'src/app/shared/app.service'
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.scss']
})
export class AddappointmentComponent implements OnInit {

  AppointmentId: number = 0;
  testzero=6;
  constructor(public appService: AppointmentService,
    private route: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    // this.AppointmentId = this.route.snapshot.params['AppointmentId'];

    // if (this.AppointmentId != 0 || this.AppointmentId != null) {
    //   this.appService.GetAppointmentById(this.AppointmentId).subscribe(
    //     result => {
    //       console.log(result);
    //       var datepipe = new DatePipe("en-UK");
    //       let formatedDate: any = datepipe.transform(result.StaffDob, 'yyy-MM-dd');
    //       result.StaffDob = formatedDate;
    //       //asign this result to empService formData
    //       this.appService.formData = Object.assign({}, result);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // }
  }
  //submit form 
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.appService.formData.AppointmentId;

    //insert or update
    if (addId == 0 || addId == null) {
      //insert 
      this.insertAppointment(form);
    }
    // else {
    //   this.updateAppointment(form);
    // }
  }
  insertAppointment(form1?: NgForm) {
    console.log("Inserting a record...");
    this.appService.insertAppointment(form1.value).subscribe(
      result => {
        console.log(result);
        //calling reset form for clear the contents
        form1.resetForm();
        this.toastrService.success("Appointment sucessfully");
      },
      error => {
        console.log(error);
      }
    );
  }
  // //Update Method
  // updateAppointment(form?: NgForm) {
  //   console.log("Updating record...");
  //   this.appService.updateAppointment(form.value).subscribe(
  //     result => {
  //       console.log(result);
  //       //ca;;ing reset form for clear the contents
  //       this.resetForm(form);
  //       this.toastrService.success('appointment updated');
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
  //clear all contents after submit  
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
  

}
