import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group/group.service';
import { Group } from './group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {

  group: Group = new Group();
  public Groups: Group[];
  tableMode: boolean = true;

  constructor(private groupService: GroupService) {

  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.groupService.getGroups().subscribe((data: Group[]) => this.Groups = data);
  }
  save() {
    if (this.group.id == null) {
      this.groupService.createGroup(this.group)
        .subscribe((data: Group) => this.Groups.push(data));
    } else {
      this.groupService.updateGroup(this.group.id, this.group)
        .subscribe(data => this.load());
    }
    this.cancel();
  }
  editGroup(g: Group) {
    this.group = g;
  }
  cancel() {
    this.group = new Group();
    this.tableMode = true;
  }
  delete(g: Group) {
    this.groupService.deleteGroup(g.id)
      .subscribe(data => this.load());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }

}
