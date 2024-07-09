import React from "react";
import { Link } from "react-router-dom";

// Importing icons from assets
import reddit from "../../../assets/socials/reddit.png";
import twitch from "../../../assets/socials/twitch-fill.png";
import twitter from "../../../assets/socials/twitter-fill.png";
import tele from "../../../assets/socials/tele-fill.png";
import discord from "../../../assets/socials/discord-fill.png";
import unknown from "../../../assets/socials/unknow-fill.png";
import tele_con from "../../../assets/socials/tele-fill.png";

const SocialIcons = ({ details }) => {
  const socialLinks = {
    website: { icon: unknown, url: details?.website_link },
    twitch: { icon: twitch, url: details?.twitch_link },
    twitter: { icon: twitter, url: details?.twitter_link },
    telegram: { icon: tele, url: details?.telegram_link },
    telegram_cont: { icon: tele_con, url: details?.telegram_contact },
    discord: { icon: discord, url: details?.discord_link },
    reddit: { icon: reddit, url: details?.reddit_link },
  };
  return (
    <div className="flex justify-center items-center flex-wrap gap-5 py-5 border-b border-[rgb(22,23,30)]">
      {Object.entries(socialLinks).map(([key, { icon, url }]) =>
        url ? ( // Render only if URL is present
          <a href={url} target="_blank" key={key}>
            <img src={icon} alt={key} className="w-auto h-12" />
          </a>
        ) : null
      )}
      {/* Rendering the 'unknown' icon if no specific icons are available and no links are provided */}
      {!Object.values(socialLinks).some((link) => link.url) && (
        <img src={unknown} alt="Unknown" className="w-auto h-12" />
      )}
    </div>
  );
};

export default SocialIcons;
