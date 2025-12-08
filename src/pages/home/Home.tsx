import { useEffect, useState } from "react";
import SiteButton from "../../features/buttons/SiteButton";
import ButtonTypes from "../../features/buttons/types/ButtonTypes";
import type { HomePageSection } from "../../features/section_card/types/section";
import SectionCard from "../../features/section_card/SectionCard";
import "./ui/Home.css";

export default function Home() {
  const [homePageContent, setHomePageContent] =
    useState<HomePageContent | null>(null);

  useEffect(() => {
    // fetch(...).then(j => { setHomePageContent(j) })
    setTimeout(() => {
      // імітація звернення до сервера та отримання даних homePageJson
      setHomePageContent(homePageJson);
    }, 300);
  }, []);

  return (
    <>
      <h1 className="display-4">
        <i className="bi bi-house-heart"></i> Home, sweet home
      </h1>
      <SiteButton buttonType={ButtonTypes.Red} text="Red Button" />
      <SiteButton buttonType={ButtonTypes.White} text="White Button" />

      <div className="content-container">
        {homePageContent?.sections.map((sec) => (
          <SectionCard section={sec} key={sec.title} />
        ))}
      </div>
    </>
  );
}

type HomePageContent = {
  sections: Array<HomePageSection>;
};

const homePageJson: HomePageContent = {
  sections: [
    {
      imageUrl: "/img/wide-applefull.png.webp",
      title: "Apple",
      slug: "apple",
    },
    {
      imageUrl: "/img/big-center-airpods-2025full.png.webp",
      title: "AirPods",
      slug: "airpods",
    },
    {
      imageUrl: "/img/big-2025-iphonefull.png.webp",
      title: "iPhone",
      slug: "iphonefull",
    },
    {
      imageUrl: "/img/Frame-8full.png.webp",
      title: "б/у Apple",
      slug: "applebw",
    },
    {
      imageUrl: "/img/android-newfull.png.webp",
      title: "Смартфони",
      slug: "android",
    },
    {
      imageUrl: "/img/wide-dysonfull.png.webp",
      title: "Dyson",
      slug: "dysonfull",
    },
    {
      imageUrl: "/img/wide-garminfull.png.webp",
      title: "garminfull",
      slug: "garminfull",
    },
    {
      imageUrl: "/img/big-kitchenfull.png.webp",
      title: "kitchenfull",
      slug: "kitchenfull",
    },
    {
      imageUrl: "/img/home-carefull.png.webp",
      title: "home-carefull",
      slug: "home-carefull",
    },
    {
      imageUrl: "/img/gaming-micefull.png.webp",
      title: "micefull",
      slug: "micefull",
    },
    {
      imageUrl: "/img/gaming-acsfull.png.webp",
      title: "acsfull",
      slug: "acsfull",
    },
    {
      imageUrl: "/img/headphonesfull.png.webp",
      title: "headphonesfull",
      slug: "headphonesfull",
    },
    {
      imageUrl: "/img/big-ps5full.png.webp",
      title: "Консолі",
      slug: "ps5full",
    },
    {
      imageUrl: "/img/wide-noutfull.png.webp",
      title: "Ноутбуки",
      slug: "noutfull",
    },
    {
      imageUrl: "/img/image24full.png.webp",
      title: "Телевізори",
      slug: "tvfull",
    },
    {
      imageUrl: "/img/image19full.png.webp",
      title: "Екшн камери",
      slug: "actioncamerasfull",
    },
    {
      imageUrl: "/img/wide-photoofull.png.webp",
      title: "Фотоапарати",
      slug: "photoofull",
    },
    {
      imageUrl: "/img/image24full.png.webp",
      title: "Монитори",
      slug: "monitorsfull",
    },
    {
      imageUrl: "/img/wide-ipads-2full.png.webp",
      title: "Планшети",
      slug: "ipadsfull",
    },
    {
      imageUrl: "/img/big-coffefull.png.webp",
      title: "Кавомашини",
      slug: "coffeefull",
    },
    {
      imageUrl: "/img/big-robotfull.png.webp",
      title: "Роботи-пилососи",
      slug: "robotfull",
    },

    {
      imageUrl: "/img/e-riderfull.png.webp",
      title: "Електронні книги",
      slug: "eriderfull",
    },
    {
      imageUrl: "/img/wide-vrfull.png.webp",
      title: "VR гарнітура",
      slug: "vrfull",
    },

    {
      imageUrl: "/img/proektorfull.png.webp",
      title: "Проектори",
      slug: "proektorfull",
    },
  ],
};
