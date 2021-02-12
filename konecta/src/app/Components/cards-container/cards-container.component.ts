import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { map } from 'rxjs/operators';
import Quill from 'quill';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.sass']
})
export class CardsContainerComponent implements OnInit {
  @Input() element: any;

  data$: Observable<any[]>
  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.data$ = this.dataService.data$.pipe(
      map((res) => {
        let image = '';
        for (let i= 0; i < res.length; i++){
          const curr = JSON.parse(res[i]["obj"] || '{}').ops || [];
          for (let m= 0; m < curr.length; m++){
            if(curr[m]['insert']['image']){
              image = 'https://nik.grupokonecta.co:7070' + curr[m]['insert']['image'];
              res[i].firstImage = image;
            }
          }
        }
      return res
      })
    )
  }

  back(){
    document.getElementById("arrow_back").style.display = 'none'
    document.getElementById("container_cards").style.display = 'flex'
    document.getElementById("contenedor").style.display = "none";
  }

  getFavorites() {
    this.dataService.getFavorites().subscribe((res: any) => { this.data$ = res})
    console.log(this.data$)
  }

  
}