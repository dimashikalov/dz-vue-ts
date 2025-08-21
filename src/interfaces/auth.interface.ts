import type { IProfile } from './profile.interface';

export interface ILoginResponse {
  token: string;
  user: IProfile;
}
