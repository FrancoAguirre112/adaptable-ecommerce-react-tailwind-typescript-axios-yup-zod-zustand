import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ConfigState {
  config: Config;
  loadingConfig: boolean;
  setConfig: (data: Config) => void;
}

interface Config {
  id: number;
  page_name: string;
  logo_link: string;
  main_color: string;
  home_hero_items_titles: string[];
  home_hero_items_subtitles: string[];
  home_hero_items_buttons: string[];
  home_hero_items_buttons_links: string[];
  home_hero_items_images: string[];
  home_section1_active: boolean;
  home_section1_items_titles: string[];
  home_section1_items_subtitles: string[];
  home_section1_items_buttons: string[];
  home_section1_items_buttons_links: string[];
  home_section1_items_images: string[];
  home_section2_active: boolean;
  home_section2_title: string;
  home_section2_items_titles: string[];
  home_section2_items_subtitles: string[];
  home_section2_items_buttons: string[];
  home_section2_items_buttons_links: string[];
  home_section2_items_images: string[];
  social_links: string[];
  social_color: string;
  language: string;
}

export const useConfigStore = create<ConfigState>()(
  devtools(
    persist(
      (set) => ({
        config: {
          id: 0,
          page_name: "",
          logo_link: "",
          main_color: "",
          home_hero_items_titles: [],
          home_hero_items_subtitles: [],
          home_hero_items_buttons: [],
          home_hero_items_buttons_links: [],
          home_hero_items_images: [],
          home_section1_active: false,
          home_section1_items_titles: [],
          home_section1_items_subtitles: [],
          home_section1_items_buttons: [],
          home_section1_items_buttons_links: [],
          home_section1_items_images: [],
          home_section2_active: false,
          home_section2_title: "",
          home_section2_items_titles: [],
          home_section2_items_subtitles: [],
          home_section2_items_buttons: [],
          home_section2_items_buttons_links: [],
          home_section2_items_images: [],
          social_links: [],
          social_color: "",
          language: "EN"
        },
        loadingConfig: true,
        setConfig: (data) =>
          set(() => ({
            config: data,
            loadingConfig: false,
          })),
      }),
      {
        name: "config-storage",
      }
    )
  )
);
