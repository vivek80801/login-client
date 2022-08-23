import React from "react";

export interface IUser {
    name: string,
    email: string,
    password: string
}

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}
export const UserContext = React.createContext<any | IUserContext>(null);

/*@ts-ignore */
const UserContextProvider: React.FC = ({ children }): JSX.Element => {
  const [user, setUser] = React.useState<IUser>();
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
