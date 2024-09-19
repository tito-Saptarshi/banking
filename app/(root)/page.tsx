import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Saptarshi", lastName: "Das", email: "saptarshi.tito.20@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={45200}
          />
        </header>
        Recent Transactions
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 500}, {currentBalance: 1200}]} />
    </section>
  );
};

export default Home;
