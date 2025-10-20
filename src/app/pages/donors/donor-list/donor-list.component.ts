import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DonorService } from '../../../services/donor.service';
import { Donor } from '../../../models/donor';

@Component({
  selector: 'app-donor-list',
  standalone: true,          // ✅ standalone component
  imports: [CommonModule, RouterModule], // ✅ required for *ngIf, *ngFor, routerLink
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donors: Donor[] = [];
  loading = true;

  // Pagination
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;
  pagedDonors: Donor[] = [];

  constructor(private donorService: DonorService, private router: Router) {}

  ngOnInit() {
    this.loadDonors();
  }

  loadDonors() {
    this.loading = true;
    this.donorService.list().subscribe({
      next: (res) => {
        this.donors = res;
        this.totalPages = Math.ceil(this.donors.length / this.itemsPerPage);
        this.setPage(this.currentPage);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  setPage(page: number) {
    if (page < 1) page = 1;
    if (page > this.totalPages) page = this.totalPages;

    this.currentPage = page;
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedDonors = this.donors.slice(start, end);
  }

  nextPage() { this.setPage(this.currentPage + 1); }
  prevPage() { this.setPage(this.currentPage - 1); }

editDonor(id?: number) {
  if (!id) return; // skip if undefined
  this.router.navigate(['/donor', id]);
}

  deleteDonor(id?: number) {
  if (id === undefined) return;  // do nothing if undefined
  if (confirm('Are you sure?')) {
    this.donorService.deleteDonor(id).subscribe(() => this.loadDonors());
  }
}

}
