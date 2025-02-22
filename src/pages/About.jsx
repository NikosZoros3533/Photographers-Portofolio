import "../css/About.css"; // Import the CSS file
import { useState, useEffect } from "react";
import heroIcon from "../assets/heroIcon.jpg";

const About = () => {
  const [language, setLanguage] = useState("eng");

  function setToEl() {
    setLanguage("el");
  }
  function setToEng() {
    setLanguage("eng");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <button className="language-button" onClick={setToEng}>
        <span>ENG</span>
      </button>
      <button className="language-button" onClick={setToEl}>
        <span>EL</span>
      </button>
      <div className="about-content">
        <img src={heroIcon} alt="heroicon" className="about-image" />
        <div className="about-text">
          {language === "eng" && (
            <>
              <h1 className="about-title">Dionisis Velentakis</h1>
              <p className="about-description">
                Hello! I'm a passionate photographer based in Ptolemaida, also
                capturing moments in the vibrant city of Thessaloniki. With a
                love for storytelling through my lens, I specialize in
                landscapes that showcase the beauty of our surroundings,
                heartfelt portraits that reveal true emotions, and memorable
                couple sessions, including weddings that capture love in its
                purest form. I also collaborate with local businesses, helping
                them tell their unique stories through impactful imagery.
              </p>
              <p className="about-description">
                I shoot with [Camera Model] paired with [Lens Model], tools that
                allow me to bring my creative vision to life. My dedication to
                the craft has been recognized with a 3rd place award at
                [Competition Name], a moment that fueled my passion even
                further. But beyond accolades, my greatest joy comes from
                freezing moments in time, turning them into memories that last a
                lifetime.
              </p>
              <p className="about-description">
                Whether I'm chasing the perfect light in a serene landscape or
                capturing the joyous laughter of a couple in love, I aim to
                create photographs that resonate and inspire.
              </p>
              <p className="about-description">
                Let’s create something beautiful together.
              </p>
            </>
          )}
          {language === "el" && (
            <>
              <h1 className="about-title">Διονύσης Βελεντάκης</h1>
              <p className="about-description-el">
                Είμαι φωτογράφος με έδρα την Πτολεμαΐδα και δραστηριοποιούμαι
                επίσης στη ζωντανή πόλη της Θεσσαλονίκης. Μέσα από τον φακό μου,
                αγαπώ να αφηγούμαι ιστορίες – από τοπία που αναδεικνύουν τη
                μαγεία του περιβάλλοντος, μέχρι πορτρέτα που αποτυπώνουν
                αυθεντικά συναισθήματα. Ειδικεύομαι επίσης σε φωτογραφίσεις
                ζευγαριών και γάμων, αποθανατίζοντας τον έρωτα στις πιο όμορφες
                στιγμές του. Παράλληλα, συνεργάζομαι με τοπικές επιχειρήσεις,
                βοηθώντας τες να προβάλουν την ταυτότητά τους μέσα από
                εντυπωσιακές εικόνες.
              </p>
              <p className="about-description-el">
                Χρησιμοποιώ [Μοντέλο Κάμερας] και [Μοντέλο Φακού], εξοπλισμό που
                μου επιτρέπει να δίνω ζωή στη δημιουργική μου οπτική. Η αφοσίωσή
                μου στη φωτογραφία έχει αναγνωριστεί με τη διάκριση της 3ης
                θέσης στον διαγωνισμό [Όνομα Διαγωνισμού], μια στιγμή που μου
                έδωσε ακόμα περισσότερη ώθηση να εξελιχθώ. Όμως, πέρα από τις
                διακρίσεις, η μεγαλύτερη ικανοποίηση έρχεται όταν καταφέρνω να
                "παγώνω" στιγμές και να τις μετατρέπω σε αναμνήσεις που μένουν
                για πάντα.
              </p>
              <p className="about-description-el">
                Από το να κυνηγάω το ιδανικό φως σ’ ένα τοπίο μέχρι το να
                απαθανατίζω το γέλιο ενός ερωτευμένου ζευγαριού, στόχος μου
                είναι να δημιουργώ εικόνες που αγγίζουν την ψυχή.
              </p>
              <p className="about-description-el">
                Ανυπομονώ να γνωριστούμε και να φτιάξουμε μαζί κάτι όμορφο!
                </p>
            </>
          )}

          <p className="about-contact">Contact: lucimorn12@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
