import { Component } from '@angular/core';
import data from '../../assets/datatest.json';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

     private companies = data;
     tableClass ="md"
     title:string ="Promociones"

     //selected details
     selectedName:string=""
     selectedGender:string=""
     selectedDesc:string=""
     selectedId:string=""
     selected:any
  constructor(
    private router :Router
  ) {
    console.log(this.companies)
  }

  ngOnInit(){

  }

  async open(row)
  {
    console.log('row selected',row)

    //take row data and route to another page
    if(row)
    {
      this.selectedName = row.name 
      this.selectedGender = row.gender
      this.selectedDesc = row.description
      this.selectedId = row.id
      //router to page with params
      this.openDetailInTab(this.selectedName,this.selectedGender,this.selectedDesc,this.selectedId)
    }
  }

  openDetailInTab(name:string,gender:string,desc:string,id:string)
  {
    this.selected ={
      name:name,
      gender:gender,
      description: desc,
      id : id
    }
    let navigationExtra: NavigationExtras={
      queryParams:{
        selected : JSON.stringify(this.selected)
      }
    }
    this.router.navigate(['tab2'],navigationExtra)
  }
}
