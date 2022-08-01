import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  posts: Post[] =  [
    {
      id: 1,
      title: "First Post",
      text: "Doctors Appointment",
      author: "Sara Connor",
      status: "published"
    },
    {
      id: 2,
      title: "Second Post",
      text: "Any text that I like",
      author: "Sara Connor",
      status: "druft"
    },
    {
      id: 3,
      title: "Third Post",
      text: "I realize that I have to create more authors",
      author: "Jon Connor",
      status: "new"
    },
    {
      id: 4,
      title: "Fourth Post",
      text: "I realize that I have to create post without status",
      author: "Jon Connor",
      status: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
