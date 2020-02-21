import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { ModalComponent } from './components/modal/modal.component';
import { LessonItemComponent } from './components/lesson/lesson-item/lesson-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    ModalComponent,
    LessonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
