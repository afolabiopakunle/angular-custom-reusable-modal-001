import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() show: boolean = true;
  @Input() title: string;
  // @Output() close = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}