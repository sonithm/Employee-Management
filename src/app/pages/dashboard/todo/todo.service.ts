import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Check me out' },
    { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
    { text: 'Ex has semper alterum, expetenda dignissim' },
    { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
    { text: 'Have fun with blur admin' },
    { text: 'What do you think?' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
