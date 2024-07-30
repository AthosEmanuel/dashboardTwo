import axios from "axios";

const baseURL = "https://api.basestudio.app/v1/c6b1a48fbc86a778b977b0/";

export interface HomeDataProps {
  researches?: Research;
  audience?: Audience;
  credits?: Credits;
  id?: number;
}

export interface Research {
  running: string;
  scripting: String;
  myresearch: MyResearch;
}

export interface MyResearch {
  name: string;
  id: number;
  status: string;
}

export interface Audience {
  balance: number;
  sended: number;
  contacts: number;
}

export interface Credits {
  running: number;
  reserved: number;
  available: number;
}

export interface NotificationProps {
  map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode;
  length: number;
  comments: number;
  read?: boolean;
  mensage: string;
  id?: number;
}

const getHomeData = async (): Promise<HomeDataProps | null> => {
  try {
    const { data } = await axios.get<HomeDataProps>(
      `${baseURL}home/7a581b0e16b559ff9a9957`
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getNotificationData = async (): Promise<NotificationProps | null> => {
  try {
    const { data } = await axios.get<NotificationProps>(
      `${baseURL}notifications`
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getHomeData, getNotificationData };
