import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private owners = {};

  constructor(private http: HttpClient) {}

  fillOwners() {
    this.http.get('http://localhost:3000/owners').subscribe(
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
