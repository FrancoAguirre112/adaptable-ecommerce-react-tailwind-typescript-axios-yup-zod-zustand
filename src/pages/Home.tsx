import { Hero, Card, Section, Carrousel } from "@/components/index";
import { useConfigStore } from "@/zustand/config.store";

function Home() {
  const { config } = useConfigStore();

  return (
    <main className="animate-fade-in">
      {/* Hero section */}
      <header className="h-96 md:h-[35rem]">
        <Carrousel
          content={config.home_hero_items_titles.map((_, index) => {
            return (
              <Hero
                key={index}
                title={config.home_hero_items_titles[index]}
                subtitle={config.home_hero_items_subtitles[index]}
                textLocation="left"
                imgLink={config.home_hero_items_images[index]}
                btnLink={config.home_hero_items_buttons_links[index]}
                btnText={config.home_hero_items_buttons[index]}
                btnTransparent={false}
              />
            );
          })}
        />
      </header>

      <div className="mt-20 mx-4 lg:mx-24">
        {/* Section 1 */}
        <div
          className={`flex flex-wrap justify-center gap-2  md:gap-4 ${
            config.home_section1_active ? "" : "hidden"
          }`}
        >
          {config.home_section1_items_titles.map((_, index) => (
            <div
              key={index}
              className="h-[16rem] lg:h-[22rem] flex-grow min-w-[100%] lg:min-w-[40%]"
            >
              <Card
                title={config.home_section1_items_titles[index]}
                subtitle={config.home_section1_items_subtitles[index]}
                textLocation="left"
                imgLink={config.home_section1_items_images[index]}
                btnLink={config.home_section1_items_buttons_links[index]}
                btnText={config.home_section1_items_buttons[index]}
                btnTransparent
              />
            </div>
          ))}
        </div>

        {/* Section 2 */}
        <div className={`mt-16 ${config.home_section2_active ? "" : "hidden"}`}>
          <Section title={config.home_section2_title}>
            <div className="flex flex-wrap mt-8 gap-4">
              {config.home_section2_items_titles.map((title, index) => (
                <div
                  key={index}
                  className="h-[16rem] lg:h-[22rem] flex-grow min-w-[40%] lg:min-w-[30%]"
                >
                  <Card
                    title={title}
                    subtitle={config.home_section2_items_subtitles[index]}
                    textLocation="left"
                    imgLink={config.home_section2_items_images[index]}
                    btnLink={config.home_section2_items_buttons_links[index]}
                    btnText={config.home_section2_items_buttons[index]}
                    btnTransparent
                  />
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}

export default Home;
