import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ILessonModel } from '../../../interfaces/lesson.model';
import { LocalStorageService } from '../../../services/local-storage.service';
import { IChangesModel } from '../../../interfaces/changes.model';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.css']
})
export class LessonItemComponent implements OnInit, OnDestroy {

  @Input() lesson: ILessonModel;
  @ViewChild('newTopic', {static: false}) newTopic: ElementRef;
  @ViewChild('newDate', {static: false}) newDate: ElementRef;
  @ViewChild('newLecturer', {static: false}) newLecturer: ElementRef;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.cancelEditing();
  }

  public editModeOn(): void {
    this.lesson.editMode = true;
  }

  public deleteLesson(lessonId: number): void {
    this.localStorageService.deleteLesson(lessonId);
  }

  public editLesson(): void {
    const newData: IChangesModel = {
      id: this.lesson.id,
      topic: this.newTopic.nativeElement.value,
      date: this.newDate.nativeElement.value,
      lecturer: this.newLecturer.nativeElement.value
    };
    this.localStorageService.editLesson(newData);
    this.cancelEditing();
  }

  public cancelEditing(): void {
    this.lesson.editMode = false;
  }

}
