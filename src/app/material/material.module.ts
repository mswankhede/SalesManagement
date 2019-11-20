import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,MatInputModule,MatCardModule,MatToolbarModule,
  MatTableModule,MatMenuModule,MatIconModule,MatProgressSpinnerModule,MatSidenavModule,MatListModule} from '@angular/material';

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
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule
  ],
  exports:
  [MatButtonModule,MatCardModule,MatInputModule,
    MatToolbarModule,MatMenuModule,MatTableModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule,MatListModule],

})
export class MaterialModule { }
