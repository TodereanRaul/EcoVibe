import { Component, Input } from '@angular/core';
import { Post } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecovibe-post-content',
  imports: [CommonModule],
  templateUrl: './ecovibe-post-content.component.html',
  styleUrl: './ecovibe-post-content.component.scss'
})
export class EcovibePostContentComponent {
  @Input() post: Post | null = null;
}
