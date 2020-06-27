import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        loadChildren: () => import('../../main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../../chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'Meetings',
        loadChildren: () => import('../../meeting/meeting.module').then( m => m.MeetingPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'recent',
        loadChildren: () => import('../../recent/recent.module').then( m => m.RecentPageModule)
      },
      {
        path: 'room',
        loadChildren: () => import('../../room/room.module').then( m => m.RecentPageModule)
      },
      {
        path: '',
        redirectTo:'/tabs/Home',
        pathMatch:'full'
        },
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
