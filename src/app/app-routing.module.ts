import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import SamplePageComponent from './demo/extra/sample-page/sample-page.component';
import { EmployeeManagementComponent } from './demo/pages/employee-management/employee-management.component';
import { PendingRequestComponent } from './demo/pages/employee-management/pending-request/pending-request.component';
import { ApprovalFormComponent } from './demo/pages/employee-management/pending-request/approval-form/approval-form.component';
import { EmployeeProfileComponent } from './demo/pages/employee-management/employee-profile/employee-profile.component';
import { AttendanceComponent } from './demo/pages/employee-management/attendance/attendance.component';
import { LeaveComponent } from './demo/pages/employee-management/leave/leave.component';
import { AFKManagementComponent } from './demo/pages/employee-management/afk-management/afk-management.component';
import { ResignationPortalComponent } from './demo/pages/employee-management/resignation-portal/resignation-portal.component';
import { AgreementGeneratorComponent } from './demo/pages/employee-management/agreement-generator/agreement-generator.component';
import { AgreementPreviewComponent } from './demo/pages/employee-management/agreement-generator/agreement-preview/agreement-preview.component';
import { SendViaEmailComponent } from './demo/pages/employee-management/agreement-generator/agreement-preview/send-via-email/send-via-email.component';
import { LeaveApprovalViewComponent } from './demo/pages/employee-management/leave/leave-approval-view/leave-approval-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: EmployeeManagementComponent
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then((m) => m.FormElementsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then((m) => m.TablesModule)
      },
      {
        path: 'apexchart',
        loadComponent: () => import('./demo/chart/apex-chart/apex-chart.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/extra/sample-page/sample-page.component')
      },
      {
        path: 'employee-management',
        component: EmployeeManagementComponent
      },
      {
        path: 'pending-request',
        component: PendingRequestComponent
      },
      {
        path: 'approval-form',
        component: ApprovalFormComponent
      },
      {
        path: 'employee-profile',
        component: EmployeeProfileComponent
      },
      {
        path: 'attendance',
        component: AttendanceComponent
      },
      {
        path: 'leave',
        component: LeaveComponent
      },
      {
        path: 'afk-Management',
        component: AFKManagementComponent
      },
      {
        path: 'resignation-Portal',
        component: ResignationPortalComponent
      },
      {
        path: 'agreement-generator',
        component: AgreementGeneratorComponent
      },
      {
        path: 'agreement-generator/agreement-preview',
        component: AgreementPreviewComponent
      },
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
