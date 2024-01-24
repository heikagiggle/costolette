import React, { useEffect } from "react";
import { Navbar } from "./components";

import {
  AboutUs,
  // Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";

const Home = () => {
  useEffect(() => {
    var url =
      "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?62946";
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url;
    var options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        ctaIconWATI: false,
        position: "right",
      },
      brandSetting: {
        brandName: "Costolette",
        brandSubTitle: "undefined",
        brandImg:
          "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello Bibble , I want to make some enquiries",
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "2349020307231",
      },
    };
    s.onload = function () {
      // eslint-disable-next-line no-undef
      CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Laurels />
      <Intro />
      {/* <Chef /> */}
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
};

export default Home;
