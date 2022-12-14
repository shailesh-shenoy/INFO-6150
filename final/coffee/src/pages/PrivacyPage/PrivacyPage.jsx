import React from "react";

import "./PrivacyPage.css";

function PrivacyPage() {
  return (
    <div className="privacy-page">
      <h1 className="privacy-page__title">Online Privacy is a MYTH</h1>
      <p className="privacy-page__paragraph">
        Myths are stories (or narratives) that are often foundational to a
        society’s beliefs. The myth of online privacy is like that: Privacy
        feels foundational in our society. To the extent we accept we don’t have
        privacy online, it feels like something we’ve lost—something that we can
        perhaps recover with the right software tweaks, behaviors, or perhaps
        regulations.
      </p>
      <p className="privacy-page__paragraph">
        We all want to recover (and maintain) our online privacy. There are lots
        of features and industries built around fighting for privacy, from
        private-browsing modes and tracker blockers to private VPNs. But online
        privacy is a myth—and offline privacy might be one, too.
      </p>
      <p className="privacy-page__paragraph">
        We may all agree that online privacy isn’t something we have. But do you
        realize how little privacy you actually have? First of all, when you go
        online, your internet service provider—whether that’s a home internet
        connection or a cellular data connection—can see all the websites you’re
        accessing. In the USA, they can even sell your browsing data. Your
        mobile carrier may even be tracking and selling your app usage activity.
      </p>
      <p className="privacy-page__paragraph">
        When you visit a website, it can see your IP address and use that to
        track you across visits. But it likely loads a lot of tracking scripts,
        too. Those tracker networks can track your activity across multiple
        websites. That’s one reason you see shopping ads chase you across the
        web after you look up a particular product. Even if you’re clearing
        cookies, there are a lot of ways to fingerprint your web browser.
      </p>
      <p className="privacy-page__paragraph">
        Okay, you might know all that—but did you know that advertisers can tie
        your in-store purchases and visits back to ads you see? For example,
        Google has a product that does this, and one of the data sources it uses
        is the nebulous “transaction data uploaded by the advertiser or
        aggregated and anonymized data from third parties.” Your credit card
        usage is being used to track you, too. Did you know that Facebook’s
        advertising tools are so granular that you can target ads so narrowly
        that you can show them to only one individual?
      </p>
      <p className="privacy-page__paragraph">
        Government surveillance is a given: Edward Snowden famously drew
        attention to massive warrantless government surveillance of internet and
        phone data. The NSA’s XKeyScore software reportedly allows real-time
        search and access to the massive amount of data being logged about
        online activity.
      </p>
      <p className="privacy-page__paragraph">
        The online world isn’t something completely separate from the real,
        physical world, of course. The USA is full of automatic license plate
        readers, and many of them are now linked together in a big network. Even
        if you get off the computer and go for a drive, your movements are being
        tracked and logged. Amazon may be handing videos from your Ring doorbell
        camera over to the authorities without your explicit consent. Your cell
        phone location data is being used to track you, too.
      </p>
      <p className="privacy-page__paragraph">
        So the next time you "Accept Privacy Policy" online, or even if you
        reject it, know that it probably doesn't matter. Such checkboxes only
        give you the illusion of control, the real control over your privacy is
        a trillion dollar industry you can't possibly fight for.
      </p>
    </div>
  );
}

export default PrivacyPage;
