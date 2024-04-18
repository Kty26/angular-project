import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>import('./dashboard/dashboard.component'),

        children:[
            {
                path: 'changes-detection',
                title: 'Changes Detection',
                loadComponent: () => import('./dashboard/pages/changes-detection/changes-detection.component')
            },
            {
                path:'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path:'defer-views',
                title: 'Defer View',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
            },
            {
                path:'defer-option',
                title: 'Defer Option',
                loadComponent: ()=> import('./dashboard/pages/defer-option/defer-option.component'),
            },
            {
                path:'user',
                title: 'User',
                loadComponent: () => import('./dashboard/pages/user/user.component'),
            },
            {
                path:'users',
                title: 'Users',
                loadComponent: () => import('./dashboard/pages/users/users.component'),
            },
            {
                path:'view-transition',
                title:'View Transition',
                loadComponent: ()=> import('./dashboard/pages/view-transition/view-transition.component'),
            }
        
        ]
    },
    {
        path:'',
        redirectTo: 'dashboard' ,
        pathMatch:'full'
    }
];
