import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:57960/api";
readonly PhotoUrl = "http://localhost:57960/Photos/";

  constructor(private http:HttpClient) { }

  getKhoaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Khoas');
  }

  addKhoa(val:any){
    return this.http.post(this.APIUrl+'/Khoas',val);
  }

  updateKhoa(val:any){
    return this.http.put(this.APIUrl+'/Khoas',val);
  }

  deleteKhoa(val:any){
    return this.http.delete(this.APIUrl+'/Khoas/'+val);
  }


  getLopHocsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/LopHocs');
  }

  addLopHocs(val:any){
    return this.http.post(this.APIUrl+'/LopHocs',val);
  }

  updateLopHocs(val:any){
    return this.http.put(this.APIUrl+'/LopHocs',val);
  }

  deleteLopHocs(val:any){
    return this.http.delete(this.APIUrl+'/LopHocs/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/LopHocs/SaveFile',val);
  }

  getAllLopHocsNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/LopHocs/GetAllName');
  }

}
