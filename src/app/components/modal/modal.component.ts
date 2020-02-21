import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalVisible: boolean;
  @Output() modalEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  public addToTheList(newTopic, newDate, newLecturer): void {
    const itemWithMaxId = this.localStorageService.$lessonsList.value.sort((a, b) => b.id - a.id)[0];
    this.localStorageService.addLesson({
      id: (itemWithMaxId && itemWithMaxId.id || 0) + 1,
      topic: newTopic.value,
      date: newDate.value,
      lecturer: newLecturer.value,
      editMode: false
    });
    newTopic.value = '';
    newDate.value = '';
    newLecturer.value = '';
    this.closeModal();
  }

  public closeModal(): void {
    this.modalEmitter.emit('close');
  }

}
