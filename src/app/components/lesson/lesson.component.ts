import { Component, OnInit } from '@angular/core';
import { ILessonModel } from '../../interfaces/lesson.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  public lessons: ILessonModel[];
  public modalVisible = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.subscribeForChanges();
  }

  public openAddLessonModal(): void {
    this.modalVisible = true;
  }

  public closeModal(): void {
    this.modalVisible = false;
  }

  private subscribeForChanges(): void {
    this.localStorageService.$lessonsList.subscribe(res => {
      this.lessons = res;
    });
  }

}
