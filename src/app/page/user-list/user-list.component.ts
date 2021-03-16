import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this.userService.list$;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onDelete(user: User): void {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.userService.remove(user);
    }
  }

  phrase: string = '';
  
  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  sorterKey: string = '';

  onColumnSelect(key: string) : void {
    this.sorterKey = key;
  }

}

  


