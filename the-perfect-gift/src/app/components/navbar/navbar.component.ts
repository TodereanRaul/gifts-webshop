import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule to the imports array
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Fixed typo here (styleUrls instead of styleUrl)
})
export class NavbarComponent {
  // No need to inject RouterModule in the constructor
}
