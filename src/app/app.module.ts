import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { TableviewComponent } from './components/tableview/tableview.component';
import { TableComponent } from './components/tableview/table/table.component';
import { BarChartComponent } from './components/tableview/bar-chart/bar-chart.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TableviewComponent,
    TableComponent,
    BarChartComponent,
    AddDataComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    HighchartsChartModule,
    MatCardModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
