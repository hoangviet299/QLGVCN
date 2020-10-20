import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-add-edit-khoa',
  templateUrl: './add-edit-khoa.component.html',
  styleUrls: ['./add-edit-khoa.component.css']
})
export class AddEditKhoaComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  MaKhoa:string;
  TenKhoa:string;

  ngOnInit(): void {
    this.MaKhoa=this.dep.MaKhoa;
    this.TenKhoa=this.dep.TenKhoa;
  }

  addKhoa(){
    var val = {MaKhoa:this.MaKhoa,
                TenKhoa:this.TenKhoa};
    this.service.addKhoa(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateKhoa(){
    var val = {MaKhoa:this.MaKhoa,
      TenKhoa:this.TenKhoa};
    this.service.updateKhoa(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
