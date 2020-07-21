import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx'
import data from '../../assets/datatest.json';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //my dummy data
  private promotions = data

  //general 
   name:string=""
   gender:string=""
   description:string=""
   id :string=""
   data:any
   isData:Boolean=false
   //titles
   detallePromociones:string ="Detalle -"
  constructor(private route:ActivatedRoute,private router:Router) {

    this.route.queryParams.subscribe(p=>{
      if(p && p.selected)
      {
        this.isData =true
        this.data= JSON.parse(p.selected)
        this.name= this.data.name
        this.gender = this.data.gender
        this.id = this.data.id
        this.description = this.getItemDescription(this.id)
        this.detallePromociones+= this.name
      }
    })
  }

  getItemDescription(Id:string):string{
    let desc:string=""
    if(this.promotions)
    {
      for(var i =0; i<this.promotions.length;i++)
      {
        if(this.promotions[i].id==Id)
        {
          desc = this.promotions[i].description
          break
        }
      }
    }
    return desc
  }

  //external links
  openExternalUrl(url: string) {
    // this.appbrowser.create(
    //   url,
    //   '_blank'
    // );
  }

}
