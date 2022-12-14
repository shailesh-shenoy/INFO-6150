import React from "react";

import "./LandingPage.css";
import Hero from "./Hero";
import Panel from "./Panel";

import historyImage from "images/flavor-history.jpg";
import factsImage from "images/facts.jpg";
import quizImage from "images/love-trivia-a-lottee.jpg";

const panels = [
  {
    title: "Flavor History",
    description: `Second only to oil, coffee is the most valuable legally traded commodity in the world. We love it, we rely on it, and we drink it in massive quantities.
      But where exactly did this caffeinated phenomenon begin? 
      Coffee’s beginnings are enveloped in mystery and lore. No one knows exactly how or when coffee was discovered, though there are many legends about its origin.`,
    image: historyImage,
    imageDescription:
      "Coffee beans being dried in a rural African setting, with multiple people examining them.",
    linkUri: "#/history",
    linkText:
      "Learn more about the history of world's most preferred beverage.",
  },
  {
    title: "BrewFacts",
    description: `Facts about coffee that will wake you up and appreciate one of the world's top drinks. Sip a cup of joy to these fast facts.`,
    image: factsImage,
    imageDescription:
      "8 cups with different varieties of coffee in them, arranged in a circle.",
    linkUri: "#/facts",
    linkText:
      "Read up on some facts about that cup of coffee in your hand (If you are not drinking coffee right now, why?)",
  },
  {
    title: "Love Trivia a Lotte ?",
    description: `If you can’t start your day without a cup of coffee and love everything that has coffee in it, this ultimate coffee quiz will be perfect for you!
      Let’s discover how much you really know about coffee.`,
    image: quizImage,
    imageDescription: "An hourglass filled with coffee.",
    linkUri: "#/quiz",
    linkText: "The Coffee Nerd Quiz",
  },
];

function LandingPage({ setPage }) {
  return (
    <div className="landing-page">
      <Hero />
      {panels.map((panel) => {
        return (
          <Panel
            key={panel.title}
            title={panel.title}
            description={panel.description}
            image={panel.image}
            imageDescription={panel.imageDescription}
            linkUri={panel.linkUri}
            linkText={panel.linkText}
            setPage={setPage}
          />
        );
      })}
    </div>
  );
}

export default LandingPage;
