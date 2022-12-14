import "./About.css";
import aboutImage from "./images/cat-content-primary.jpeg";
import catSimba from "./images/cat-simba.jpeg";
import catOreo from "./images/cat-oreo.jpeg";

import Panel from "./Panel";

const panelContents = [
  {
    title: "About my cats",
    description: `Cats are divisive animals, aren't they? Unlike dogs who are loved by
        majority of people, cats are either loved a lot or hated a lot.
        Something about their self-dependent nature rubs people off. But
        that is exactly why I love cats! I know my cats love me and like the
        occasional cuddle, but don't need my constant attention, which is a
        blessing for my busy lifestyle. I have taken care of plenty of cats
        in my life, but Simba and Oreo are just precious to me. In fact
        their sleepy nature is what inspired this website! You are
        statistically more likely to see them sleeping than awake. This
        prompted me to I read up on the mystery of feline sleepy nature, and
        compiled the information in this website. So without further ado,
        meet my glorious cats!`,
    image: aboutImage,
    imageDescription:
      "A golden cat and a gray kitten lying beside the window, looking at the camera.",
  },
  {
    title: "Meet Simba",
    description: `We got simba from an NGO my aunt worked in. He is a mix of Persian and
    Indian breeds, and I am glad he takes the best of both worlds! Simba's
    color and neck fur give him the appearance of a lion (kinda), hence
    the name. Simba was very active and playful when he was a adorable
    little kitten, but has quickly grown up to be a grumpy, lazy bum.
    Well, at least he is still adorable! `,
    image: catSimba,
    imageDescription: "A golden cat posing for the camera.",
  },
  {
    title: "Meet Oreo",
    description: `We got Oreo from a family friend whose cat gave birth to three lovely
    kittens and were looking for a home for them when they were old
    enough. Oreo was meant to be a friend for Simba as he was getting
    lonely, but she quickly became everyone's favorite! The wonderful mix
    of Black and White fur gives her a majestic look and inspires her
    name. She is still a curious and energetic kitten, who won't stop
    breaking things.`,
    image: catOreo,
    imageDescription: `A gray kitten doing the "fake candid" pose.`,
  },
];

function About() {
  return (
    <div className="about">
      {panelContents.map((panel) => {
        return (
          <Panel
            key={panel.title}
            title={panel.title}
            description={panel.description}
            image={panel.image}
            imageDescription={panel.imageDescription}
          />
        );
      })}
    </div>
  );
}

export default About;
