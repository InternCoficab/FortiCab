import { UserListComponent } from './pages/user-list/user-list';
import { CreateUserComponent } from './pages/create-user/create-user';
import { EditUserComponent } from './pages/edit-user/edit-user';

export const userRoutes = [
  { path: '', component: UserListComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
];
