import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiProductsService } from '../../services/api-products.service';
import { Room } from '../../models/room';
import { MultiplyPipe } from '../../pipes/multiply.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MultiplyPipe,MatFormFieldModule, MatInputModule,MatButtonModule, MatMenuModule,MatCardModule,RouterLink, MatDatepickerModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  suits=0;
  numOfSuits(){
    for (let i= 0; i < 77; i++) {
      this.suits= i;
    }
  }

    filteredRooms:Room[]=[];
    constructor(private _ApiProductsService:ApiProductsService){}
    ngOnInit() {
      this._ApiProductsService.getAll().subscribe({
        next:(res)=>{
          this.filteredRooms=res
        }
      })
    }

  newVal:number=1;
  plus(num:number){
    this.newVal=Number(num)+1;
  }
  minus(n:number){
    if(n>1){
      this.newVal=n-1;
    }
    else{
      this.newVal=n
    }
  }
  checkInDate=new Date()
  nextday=new Date()
  checkOutDate=new Date(this.nextday.setDate(this.nextday.getDate()+1));

  checkAvailability(ckeckIn:string,ckeckOut:string,numOfGuests:string){
    ckeckIn=ckeckIn;
    ckeckOut=ckeckOut;
    numOfGuests=numOfGuests;
  }

  details(rId:number){
    this._ApiProductsService.idRoom=rId;
  }

}
