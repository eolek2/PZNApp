export interface User
{
  userName: string;
  token: string;
  firstName: string;
  lastName: string;
  fullName: string;
  canWritePosts: boolean;
  hasAvatar:boolean;
  avatarUrl:string;
  id:BigInteger;
}
