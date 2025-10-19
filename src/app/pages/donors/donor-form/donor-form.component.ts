import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonorService } from '../../../services/donor.service';

@Component({
  selector: 'app-donor-form',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterOutlet],
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.css']
})
export class DonorFormComponent {
  donor = {
    name: '',
    bloodGroup: '',
    phone: '',
    lastDonationDate: ''
  };

  message = '';

  constructor(private donorService: DonorService) {
    console.log('initializes DonorFormComponent');
  }
  
  saveDonor() {
    this.donorService.create(this.donor).subscribe({
      next: () => {
        this.message = 'Donor added successfully!';
        this.donor = { name: '', bloodGroup: '', phone: '', lastDonationDate: '' };
      },
      error: (err) => {
        console.error(err);
        this.message = 'Failed to add donor.';
      }
    });
  }
}
