import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,MatInputModule,MatCardModule,MatToolbarModule,
  MatTableModule,MatMenuModule,MatIconModule,MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports:
  [MatButtonModule,MatCardModule,MatInputModule,
    MatToolbarModule,MatMenuModule,MatTableModule,
  MatIconModule,
  MatProgressSpinnerModule],

})
export class MaterialModule { }
