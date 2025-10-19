import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DonorService } from '../../../services/donor.service';

@Component({
  selector: 'app-donor-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterOutlet],
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donors: any[] = [];
  loading = false;

  constructor(private donorService: DonorService) {

  }

  ngOnInit() {
    this.fetchDonors();
  }

  fetchDonors() {
    this.loading = true;
    this.donorService.list().subscribe({
      next: (res: any) => {
        this.donors = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
