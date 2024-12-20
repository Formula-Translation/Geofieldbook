// angular import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './theme/shared/_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/auth/signinv2',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/layout/layout.module').then((m) => m.LayoutModule)
      },
      {
        path: 'widget',
        loadChildren: () => import('./demo/widget/widget.module').then((m) => m.WidgetModule)
      },
      {
        path: 'online-course',
        loadChildren: () => import('./demo/admin-panel/online-courses/online-courses.module').then((m) => m.OnlineCoursesModule)
      },
      {
        path: 'membership',
        loadChildren: () => import('./demo/admin-panel/membership/membership.module').then((m) => m.MembershipModule)
      },
      {
        path: 'helpdesk',
        loadChildren: () => import('./demo/admin-panel/helpdesk/helpdesk.module').then((m) => m.HelpdeskModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./demo/admin-panel/invoice/invoice.module').then((m) => m.InvoiceModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'advance',
        loadChildren: () => import('./demo/ui-elements/ui-adv/ui-adv.module').then((m) => m.UiAdvModule)
      },
      {
        path: 'animation',
        loadChildren: () => import('./demo/pages/animation/animation.module').then((m) => m.AnimationModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then((m) => m.FormElementsModule)
      },
      {
        path: 'plugin',
        loadChildren: () => import('./demo/pages/form-plugin/form-plugin.module').then((m) => m.FormPluginModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/form-layout/form-layout.module').then((m) => m.FormLayoutModule)
      },
      {
        path: 'imagesCropper',
        loadComponent: () => import('./demo/pages/image-cropper/image-cropper.component').then((c) => c.ImageCropperComponent)
      },
      {
        path: 'bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then((m) => m.TblBootstrapModule)
      },
      {
        path: 'dataTables',
        loadComponent: () => import('./demo/pages/tables/tbl-data-table/tbl-data-table.component').then((c) => c.TblDataTableComponent)
      },
      {
        path: 'chart',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then((m) => m.CoreChartModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./demo/pages/core-map/core-map.module').then((m) => m.CoreMapModule)
      },
      {
        path: 'message',
        loadComponent: () => import('./demo/application/inline-chat/inline-chat.component')
      },
      {
        path: 'task',
        loadChildren: () => import('./demo/application/task/task.module').then((m) => m.TaskModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('./demo/application/todo/todo.module').then((m) => m.TodoModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./demo/application/gallery/gallery.module').then((m) => m.GalleryModule)
      },
      {
        path: 'editor',
        loadChildren: () => import('./demo/extension/editor/editor.module').then((m) => m.EditorModule)
      },
      {
        path: 'file-upload',
        loadComponent: () => import('./demo/extension/files-upload/files-upload.component')
      },
      {
        path: 'full-calendar',
        loadChildren: () =>
          import('./demo/extension/full-event-calendar/full-event-calendar.module').then((module) => module.FullEventCalendarModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./demo/extension/invoice/invoice.module').then((m) => m.InvoiceModule)
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/extra/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then((m) => m.MaintenanceModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('./demo/pages/landing/landing.module').then((m) => m.LandingModule)
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./demo/pages/maintenance/error/error.component').then((c) => c.ErrorComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
