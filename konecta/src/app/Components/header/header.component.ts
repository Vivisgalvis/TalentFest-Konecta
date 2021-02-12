import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: DataService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.setSearchTerm('tarjeta')
  }

  setSearchTerm(term: string) {
    console.log('term', term)
    this.dataService.setSearchTerm(term)
  }

  out(): void {
    if (document.getElementById('open-close').style.display = 'none') { document.getElementById('open-close').style.display = 'block' }
  }

  logOut() {
    this.loginService.logOut().subscribe(() => {
      this.router.navigate(['']);
    },
      (err) => {
        console.log('Hubo un error');
        console.error(err);
      }
    )
  }
}
