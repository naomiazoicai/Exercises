import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PaginationComponent} from "../pagination/pagination.component";
import {HttpClientModule} from "@angular/common/http";

interface Photo {
  id: number;
  author: string;
  download_url: string;
}

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent, HttpClientModule],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
})
export class PhotoGalleryComponent implements OnInit {
  photos: Photo[] = [];
  filteredPhotos: Photo[] = [];
  authors: string[] = [];
  selectedAuthor: string = '';
  currentPage: number = 1;
  pageSize: number = 60;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.photoService.getPhotos(this.currentPage, this.pageSize).subscribe((data) => {
      this.photos = data;
      this.authors = [...new Set(data.map(photo => photo.author))];
      this.applyFilter();
    });
  }

  applyFilter(): void {
    if (this.selectedAuthor) {
      this.filteredPhotos = this.photos.filter(photo => photo.author === this.selectedAuthor);
    } else {
      this.filteredPhotos = [...this.photos];
    }
  }

  onAuthorChange(): void {
    this.currentPage = 1;
    this.applyFilter();
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.fetchPhotos();
  }
}
