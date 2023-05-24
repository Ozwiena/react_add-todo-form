export interface User {
  id: number,
  name: string,
  email: string,
}

interface UserProps {
  user: User;
}

export const UserInfo: React.FC<UserProps> = ({ user }) => {
  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};