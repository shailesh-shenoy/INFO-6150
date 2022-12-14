import "./Theories.css";
import cardImage1 from "./images/cat-card-1.jpeg";
import cardImage2 from "./images/cat-card-2.jpeg";
import cardImage3 from "./images/cat-card-3.jpeg";
import Card from "./Card";

const cardContents = [
  {
    title: "Cats are crepescular",
    description: `Cats are crepuscular, which means they are most active during low
        light times of day, including dawn and dusk. This is probably because
        such low light conditions are the best time for stealthy hunting.
        Since humans sleep at night and are awake during the day, it might
        seem like cats are always asleep. But the reality is that you may just
        be sleeping for most of the time when your cat is active.`,
    image: cardImage1,
    imageDescription: "A golden cat lying on his back.",
  },
  {
    title: "Cats are predators",
    description: `Simply put, sleeping so much is in cats' nature. Both domestic and
    wild cats are carnivores (meat eaters), and in general, carnivores
    sleep more than herbivores. Despite the long hours cats spend curled
    up in dreamland, they are but lazy — they are resting up to conserve
    energy and recharge in preparation for the big hunt. Hunting requires
    energy and then you add the stress factor of cats being both predator
    and prey, explains cat's sleeping behavior. Your cat may be
    domesticated and eat the cat food served by humans instead of hunting
    dinner, but cats retains the biological impulse of her wild ancestors.`,
    image: cardImage2,
    imageDescription: "A gray kitten balancing on top of an office chair.",
  },
  {
    title: "Cats get bored easily",
    description: `Cats are usually very playful and curious creatures. Shine a laser
    pointer on the wall and they will start doing crazy stunts to get to
    it! But this also means that they need active attention and new
    stimulus to keep them going. In the wild, this happens naturally by
    stalking and hunting prey. But in the safety and comfort of a modern
    house, they have nothing to do and thus they doze off till something
    exciting comes by.`,
    image: cardImage3,
    imageDescription:
      "A golden cat and a gray kitten lying beside the window, bored.",
  },
];

function Theories({ setPage }) {
  return (
    <section className="theories">
      <h2 className="theories__title">
        Popular theories for cats being so sleepy
      </h2>
      {cardContents.map((card) => {
        return (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            imageDescription={card.imageDescription}
            setPage={setPage}
          />
        );
      })}
    </section>
  );
}

export default Theories;
