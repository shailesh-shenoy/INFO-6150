import React from "react";
import FactCard from "./FactCard";

import "./FactsPage.css";

import fact1Image from "images/fact-1.jpg";
import fact2Image from "images/fact-2.jpg";
import fact3Image from "images/fact-3.jpg";
import fact4Image from "images/fact-4.jpg";
import fact5Image from "images/fact-5.jpg";
import fact6Image from "images/fact-6.jpg";
import fact7Image from "images/fact-7.jpg";
import fact8Image from "images/fact-8.jpg";
import fact9Image from "images/fact-9.jpg";
import fact10Image from "images/fact-10.jpg";
import fact11Image from "images/fact-11.jpg";
import fact12Image from "images/fact-12.jpg";

const factList = [
  {
    image: fact1Image,
    imageDescription: "A board in a coffee shop with a starbucks logo.",
    fact: "Ever since the year 1987, Starbucks has opened 2 stores per day since. Today, Starbucks is the largest coffeehouse company in the world with more than 27,000 retail stores worldwide.",
  },
  {
    image: fact2Image,
    imageDescription: "A blonde woman drinking water from a glass.",
    fact: "You feel more dehydrated after drinking caffeinated drinks due to its diuretic effect. Drinks such as coffee or tea have caffeine that causes you to urinate more.",
  },
  {
    image: fact3Image,
    imageDescription: "An athlete doing agility drills.",
    fact: "Coffee naturally contains caffeine, which is a stimulant, and temporarily increases the metabolism. Some fitness trainers even advise drinking coffee before a workout to maximize fat-burning potential.",
  },
  {
    image: fact4Image,
    imageDescription: "Cream being added to a cup of coffee.",
    fact: "Coffee stays warmer about 20% longer when you add cream.",
  },
  {
    image: fact5Image,
    imageDescription: "A woman drinking coffee from a green cup.",
    fact: "Studies have shown that drinking coffee may lower your risk of depression.",
  },
  {
    image: fact6Image,
    imageDescription: "A bunch of 100 dollar bills.",
    fact: "The world's most expensive coffee can cost more than $600 a pound.",
  },
  {
    image: fact7Image,
    imageDescription: "A historical building hoisting Finland's flag.",
    fact: "Finland drinks the most coffee in the world.",
  },
  {
    image: fact8Image,
    imageDescription: "A cup of coffee with the message 'Live More Bank Less'.",
    fact: "Coffee drinkers live longer than non-coffee users.",
  },
  {
    image: fact9Image,
    imageDescription: "A child yelling annoyingly.",
    fact: "Yelling for exactly 8 years, 7 months, and 6 days will allow you to generate enough heat to make one cup of coffee. ",
  },
  {
    image: fact10Image,
    imageDescription: "A webcam with logitech logo.",
    fact: "The first webcam was created to watch over a coffee pot to avoid unnecessary trips to an empty pot. ",
  },
  {
    image: fact11Image,
    imageDescription: "A parked car that runs on coffee - Volkswagon Scirocco.",
    fact: "There's a car that runs on coffee - Volkswagon Scirocco.",
  },
  {
    image: fact12Image,
    imageDescription: "A cup of coffee from Dunkin Donuts.",
    fact: "Boston really, really loves Dunkin'.",
  },
];

function FactsPage() {
  return (
    <div className="facts-page">
      <h1 className="facts-page__title">C0FFEE Facts</h1>
      <div className="facts-page__container">
        {factList.map((f) => {
          return (
            <FactCard
              key={f.fact}
              image={f.image}
              imageDescription={f.imageDescription}
              fact={f.fact}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FactsPage;
