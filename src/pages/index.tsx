import { useEffect, useState } from "react";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Panel from "@/components/Panel";
import {
  getHomeData,
  getNotificationData,
  HomeDataProps,
  NotificationProps,
} from "@/services/api";
import Update from "@/components/Update";

export default function Home() {
  const [dataHome, setDataHome] = useState<HomeDataProps | null>(null);
  const [dataNotification, setDataNotification] =
    useState<NotificationProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseHome = await getHomeData();
      const responseNotification = await getNotificationData();
      if (responseHome) {
        setDataHome(responseHome);
      }
      if (responseNotification) {
        setDataNotification(responseNotification);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <Header />
      {dataHome ? (
        <>
          <SubHeader
            researches={dataHome.researches}
            audience={dataHome.audience}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}

      {dataHome && dataNotification ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Panel credits={dataHome.credits} audience={dataHome.audience} />
            <Update data={dataNotification} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
