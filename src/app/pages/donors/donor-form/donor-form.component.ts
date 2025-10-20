import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonorService } from '../../../services/donor.service';
import { ActivatedRoute } from '@angular/router';
import { Donor } from '../../../models/donor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-form',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterOutlet],
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.css']
})

export class DonorFormComponent {

  message: string = '';
  donor: Donor = {
    id:undefined,
    name: '',
    bloodGroup: '',
    phone: '',
    lastDonationDate: '',
    age: undefined,
    city: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private donorService: DonorService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      
    });
  }


  
  

 saveDonor() {
    this.donorService.create(this.donor).subscribe({
      next: (response) => {
        console.log('Server Response:', response);
        alert('Donor saved successfully!');
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Failed to save donor!');
      }
    });
  }
  
}
