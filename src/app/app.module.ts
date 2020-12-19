import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventComponent } from './event/event.component';
import { FinishedEventComponent } from './event/finished-event/finished-event.component';
import { CurrentEventComponent } from './event/current-event/current-event.component';
import { UpcomingEventComponent } from './event/upcoming-event/upcoming-event.component';

import { MaterialModule} from './material.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { EventService } from './event/event.service';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';

//nove komponente za rad sa bazom
import { ContentDetailsComponent } from './event/content-details/content-details.component';
import { ContentListComponent } from './event/content-list/content-list.component';
import { CreateContentComponent } from './event/create-content/create-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    EventComponent,
    FinishedEventComponent,
    CurrentEventComponent,
    UpcomingEventComponent,
    ProfileComponent,
    ContentDetailsComponent,
    ContentListComponent,
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    NgImageSliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [EventService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent]
})
export class AppModule { }
