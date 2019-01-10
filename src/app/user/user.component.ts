import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  userList: any;
  constructor(private userService: UserService) { }
  
  columnNames = [{
    id: "id",
    value: "No."

  }, {
    id: "name",
    value: "Name"
  },
  {
    id: "email",
    value: "Email"
  },
  {
    id: "website",
    value: "Website"
  }];
  ngOnInit() {
    this.getUserList();
    this.displayedColumns = this.columnNames.map(x => x.id);
    
  }



  getUserList() {
    this.userService.getUsers().subscribe(
    res => {      
      this.userList = res;console.log(this.userList);
      let tableArr: Element[] = res;
      this.dataSource = new MatTableDataSource(tableArr);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    err => {
      console.log(err);
    });
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 
}

export interface Element {
  id: number,
  name: string,
  email: string,
  website: string
}
