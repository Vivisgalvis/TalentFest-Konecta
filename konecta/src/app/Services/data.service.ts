import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class DataService {  
  public dataToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pa2NvcGlhIiwiaWF0IjoxNjEyODQwMzk4LCJleHAiOjE2MTMzNTg3OTh9.MCSp3rjPSsFgxmxbB-sm0jrt97t8BI7GYEwG_ghVezQ'
  private _data = new BehaviorSubject<any[]>([])
  public data$ = this._data.asObservable()

  constructor(private http: HttpClient) {
    this.setSearchTerm('')
  }
  
  setSearchTerm(term: string) {
    this.getDataTags(term).subscribe((data: any[]) => {
      this._data.next(data)
    })
  }

  getDataTags(search = '') {
    return this.http.get<any[]>(
      `https://nik.grupokonecta.co:7070/api/pcrc/0/articulos?from=1&size=100&orderby=update&query=${search}&state=1`, 
        {
          headers: new HttpHeaders({
          'Content-Type':'application/json,charset=utf-8',
          Authorization: this.dataToken
          })
        }  
      );  
  }

  getDataId(id) {
    return this.http.get(
      `https://nik.grupokonecta.co:7070/api/articles/${id}/unico`,
        {
          headers: new HttpHeaders({
              'Content-Type': 'application/json,charset=utf-8',
              Authorization: this.dataToken
        })
      }
    )
  }

    // getCategories() {
    //     return this.http.get(
    //         'https://nik.grupokonecta.co:7070/api/pcrc/0/categorias',
    //         {
    //             headers: new HttpHeaders({
    //                 'Content-Type': 'application/json,charset=utf-8',
    //                 Authorization: this.dataToken
    //             })
    //         }
    //     )
    // }

    // getComents() {
    //     return this.http.get(
    //         'https://nik.grupokonecta.co:7070/api/articles/12058/comentarios',
    //         {
    //             headers: new HttpHeaders({
    //                 'Content-Type': 'application/json,charset=utf-8',
    //                 Authorization: this.dataToken
    //             })
    //         }
    //     )
    // }

    // getAnswers() {
    //     return this.http.get(
    //         'https://nik.grupokonecta.co:7070/api/comments/10355/respuesta',
    //         {
    //             headers: new HttpHeaders({
    //                 'Content-Type': 'application/json,charset=utf-8',
    //                 Authorization: this.dataToken
    //             })
    //         }
    //     )
    // }

    // getFavorites() {
    //     return this.http.get(
    //         'https://nik.grupokonecta.co:7070/api/users/mis/favoritos?from=0&size=6',
    //         {
    //             headers: new HttpHeaders({
    //                 'Content-Type': 'application/json,charset=utf-8',
    //                 Authorization: this.dataToken
    //             })
    //         }
    //     )
    // }
}
