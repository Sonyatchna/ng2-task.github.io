import { Injectable } from '@angular/core';
import { ILessonModel } from '../interfaces/lesson.model';
import { BehaviorSubject } from 'rxjs';
import { IChangesModel } from '../interfaces/changes.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public readonly $lessonsList: BehaviorSubject<ILessonModel[]> = new BehaviorSubject(null);

  constructor() {
    this.setInitialList();
  }

  public deleteLesson(lessonId: number): void {
    let currentLessons = this.$lessonsList.value;
    currentLessons = currentLessons.filter(lesson => lesson.id !== lessonId);
    this.setNewList(currentLessons);
  }

  public editLesson(changes: IChangesModel): void {
    const currentLessons = this.$lessonsList.value;
    const neededLessonIndex = currentLessons.findIndex(lesson => lesson.id === changes.id);
    currentLessons[neededLessonIndex] = Object.assign(currentLessons[neededLessonIndex], changes);
    this.setNewList(currentLessons);
  }

  public addLesson(lesson: ILessonModel): void {
    this.$lessonsList.value.push(lesson);
    this.setNewList(this.$lessonsList.value);
  }

  private setInitialList(): void {
    const listFromLS = JSON.parse(localStorage.getItem('lessons'));
    this.$lessonsList.next(listFromLS ? listFromLS.sort((a, b) => a.id - b.id) : []);
  }

  private setNewList(lessonsList: ILessonModel[]): void {
    localStorage.setItem('lessons', JSON.stringify(lessonsList));
    this.$lessonsList.next(lessonsList.sort((a, b) => a.id - b.id));
  }

}
