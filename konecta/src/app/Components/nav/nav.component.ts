import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  data$: Observable<any[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getCategories() {
    this.dataService.getCategories().subscribe(( res: any ) => { this.data$ = res })
    console.log(this.data$)
  }

/*   showChannels(){
    this.dataService.getDataTags().subscribe((res: any) => {this.data$ = res})
    console.log(this.data$)
  } */
 
 
}

