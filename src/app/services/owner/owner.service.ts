import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private owners = {};

  constructor(private http: HttpClient) {}

  fillOwners() {
    this.http.get(environment.API_URL + '/owners').subscribe(
      (owners: any) => {
        owners.forEach(owner => {
          this.owners[owner.id] = owner.name;
        });
      }
    );
  }

  getOwners() {
    return this.owners;
  }

}
