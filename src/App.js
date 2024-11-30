import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Market from "./screens/Market";
import LearnCrypto from "./screens/LearnCrypto";
import LearnCryptoDetails from "./screens/LearnCryptoDetails";
import Contact from "./screens/Contact";
import Notifications from "./screens/Notifications";
import Activity from "./screens/Activity";
import Exchange from "./screens/Exchange";
import WalletOverview from "./screens/WalletOverview";
import WalletOverviewDetails from "./screens/WalletOverviewDetails";
import WalletMargin from "./screens/WalletMargin";
import FiatAndSpot from "./screens/FiatAndSpot";
import DepositFiat from "./screens/DepositFiat";
import BuyCrypto from "./screens/BuyCrypto";
import SellCrypto from "./screens/SellCrypto";
import ProfileInfo from "./screens/ProfileInfo";
import Referrals from "./screens/Referrals";
import ApiKeys from "./screens/ApiKeys";
import SessionsAndLoginHistory from "./screens/SessionsAndLoginHistory";
import TwoFa from "./screens/TwoFa";
import ChangePassword from "./screens/ChangePassword";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import PageList from "./screens/PageList";
import Adverts from "./screens/p2p";
import Layout from "./components/Layout";
import AboutUs from "./screens/Asap/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={  
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          exact
          path="/market"
          element={  
            <Page>
              <Market />
            </Page>
          }
        />
        
        <Route
          path="/p2p"  
          element={
            <Page>
              <Layout>
                <Adverts />  
              </Layout>
            </Page>
          }
        />

        <Route
          path="/asap"  
          element={
            <Page>
              <Layout>
                <AboutUs />  
              </Layout>
            </Page>
          }
        />

        <Route
          exact
          path="/learn-crypto"
          element={  
            <Page>
              <LearnCrypto />
            </Page>
          }
        />
        <Route
          exact
          path="/learn-crypto-details"
          element={  
            <Page>
              <LearnCryptoDetails />
            </Page>
          }
        />
        <Route
          exact
          path="/contact"
          element={  
            <Page>
              <Contact />
            </Page>
          }
        />
        <Route
          exact
          path="/notifications"
          element={  
            <Page>
              <Notifications />
            </Page>
          }
        />
        <Route
          exact
          path="/activity"
          element={  
            <Page>
              <Activity />
            </Page>
          }
        />
        <Route
          exact
          path="/exchange"
          element={  
            <Page headerWide footerHide>
              <Exchange />
            </Page>
          }
        />
        <Route
          exact
          path="/wallet-overview"
          element={  
            <Page headerWide footerHide>
              <WalletOverview />
            </Page>
          }
        />
        <Route
          exact
          path="/wallet-overview/:id"
          element={  
            <Page headerWide footerHide>
              <WalletOverviewDetails />
            </Page>
          }
        />
        <Route
          exact
          path="/wallet-margin"
          element={  
            <Page headerWide footerHide>
              <WalletMargin />
            </Page>
          }
        />
        <Route
          exact
          path="/fiat-and-spot"
          element={  
            <Page headerWide footerHide>
              <FiatAndSpot />
            </Page>
          }
        />
        <Route
          exact
          path="/profile-info"
          element={  
            <Page>
              <ProfileInfo />
            </Page>
          }
        />
        <Route
          exact
          path="/deposit-fiat"
          element={  
            <Page>
              <DepositFiat />
            </Page>
          }
        />
        <Route
          exact
          path="/buy-crypto"
          element={  
            <Page>
              <BuyCrypto />
            </Page>
          }
        />
        <Route
          exact
          path="/sell-crypto"
          element={  
            <Page>
              <SellCrypto />
            </Page>
          }
        />
        <Route
          exact
          path="/referrals"
          element={  
            <Page>
              <Referrals />
            </Page>
          }
        />
        <Route
          exact
          path="/api-keys"
          element={  
            <Page>
              <ApiKeys />
            </Page>
          }
        />
        <Route
          exact
          path="/sessions-and-login-history"
          element={  
            <Page>
              <SessionsAndLoginHistory />
            </Page>
          }
        />
        <Route
          exact
          path="/2fa"
          element={  
            <Page>
              <TwoFa />
            </Page>
          }
        />
        <Route
          exact
          path="/change-password"
          element={  
            <Page>
              <ChangePassword />
            </Page>
          }
        />
        <Route
          exact
          path="/sign-in"
          element={  
            <Page headerHide footerHide>
              <SignIn />
            </Page>
          }
        />
        <Route
          exact
          path="/sign-up"
          element={  
            <Page headerHide footerHide>
              <SignUp />
            </Page>
          }
        />
        <Route
          exact
          path="/forgot-password"
          element={  
            <Page headerHide footerHide>
              <ForgotPassword />
            </Page>
          }
        />
        <Route exact path="/pagelist" element={<PageList />}/>
      </Routes>
    </Router>
  );
}

export default App;
