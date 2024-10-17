import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  detailsRoom:Room[]=[];
  idRoom:number=0;
  constructor(private _HttpClient:HttpClient){}
  getAll():Observable<Room[]>{
    return this._HttpClient.get<Room[]>("http://localhost:3000/Rooms")
  }
  getRoomByID(id:number):Observable<Room[]>{
    return this._HttpClient.get<Room[]>(`http://localhost:3000/Rooms?id=${id}`)
  }
}
