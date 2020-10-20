import {SharedService} from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-khoa',
  templateUrl: './show-khoa.component.html',
  styleUrls: ['./show-khoa.component.css']
})
export class ShowKhoaComponent implements OnInit {

  constructor(private service:SharedService) { }

  KhoaList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  MaKhoaFilter:string="";
  TenKhoaFilter:string="";
  KhoaListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      MaKhoa:0,
      TenKhoa:"",
    }
    this.ModalTitle="Add Khoa";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item){
    this.dep=item;
    this.ModalTitle="Edit Khoa";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteKhoa(item.MaKhoa).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getKhoaList().subscribe(data=>{
      this.KhoaList=data;
      this.KhoaListWithoutFilter=data;
    });
  }

  FilterFn(){
    var MaKhoaFilter = this.MaKhoaFilter;
    var TenKhoaFilter = this.TenKhoaFilter;

    this.KhoaList = this.KhoaListWithoutFilter.filter(function (el){
        return el.MaKhoa.toString().toLowerCase().includes(
          MaKhoaFilter.toString().trim().toLowerCase()
        )&&
        el.TenKhoa.toString().toLowerCase().includes(
          TenKhoaFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.KhoaList = this.KhoaListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}