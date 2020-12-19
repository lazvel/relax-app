import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { EventComponent } from './event/event.component';
import { ContentListComponent } from './event/content-list/content-list.component';
import { CreateContentComponent } from './event/create-content/create-content.component';

const rute: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'event', component: EventComponent},

    {path: 'contents', component: ContentListComponent},
    {path: 'reserve', component: CreateContentComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]
})
export class RoutingModule {}