import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../../group/group';

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  private url = "/api/groups";

  constructor(private http: HttpClient) {
  }

  getGroups() {
    return this.http.get(this.url);
  }

  getGroup(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createGroup(group: Group) {
    return this.http.post(this.url, group);
  }
  updateGroup(id: number, group: Group) {
    return this.http.put(this.url + '/' + id, group);
  }
  deleteGroup(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
