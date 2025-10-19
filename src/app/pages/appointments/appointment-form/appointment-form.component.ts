import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterOutlet],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  appointment = {
    userId: '',
    appointmentTime: '',
    status: 'PENDING'
  };

  message = '';

  constructor(private appointmentServicetp: AppointmentService) {}

  saveAppointment() {
    this.appointmentServicetp.book(this.appointment).subscribe({
      next: () => {
        this.message = 'Appointment created successfully!';
        this.appointment = { userId: '', appointmentTime: '', status: 'PENDING' };
      },
      error: (err) => {
        console.error(err);
        this.message = 'Failed to create appointment.';
      }
    });
  }
}
