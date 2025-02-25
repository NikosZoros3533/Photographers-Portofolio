import "../css/About.css"; // Import the CSS file
import { useState, useEffect } from "react";
import heroIcon from "/heroIcon.webp";

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
      <button className={language==="eng"?"language-button pressed":"language-button"} onClick={setToEng}>
        <span>ENG</span>
      </button>
      <button className={language==="el"?"language-button pressed":"language-button"} onClick={setToEl}>
        <span>EL</span>
      </button>
      <div className="about-content">
        <img src={heroIcon} alt="heroicon" className="about-image" />
        <div className="about-text">
          {language === "eng" && (
            <>
              <h1 className="about-title">Dionisis Velentakis</h1>
              <p className="about-description">
                Hello! I’m Dionisis Velentakis, a passionate photographer with a
                keen eye for capturing the essence of my subjects. Based in
                Greece, I’ve dedicated my career to exploring the world through
                the lens, creating images that tell compelling stories and evoke
                emotions
              </p>
              <p className="about-description">
                Throughout my journey in photography, I’ve had the honor of
                winning two prestigious competitions in Greece, showcasing my
                work on both a national and international stage. I’m proud to
                say that I was also recognized among the top 50 photographers in
                Greece for my male portrait work, an achievement that inspires
                me to continuously push my creative boundaries.
              </p>
              <p className="about-description">
                Photography is not just a profession for me; it’s a way of life.
                My style is characterized by a blend of artistic vision and
                technical precision, allowing me to create striking and
                memorable portraits. I believe that every photograph has the
                power to connect people, and I strive to capture those candid
                moments that reveal the true spirit of my subjects.
              </p>
              <p className="about-description">
                When I’m not behind the camera, you can find me exploring new
                landscapes or spending time with fellow artists, always seeking
                inspiration in the beauty that surrounds us.
              </p>
              <p className="about-description">
                I invite you to explore my portfolio and witness the world
                through my eyes. If you’re interested in collaborating or just
                want to connect, feel free to reach out!
              </p>
            </>
          )}
          {language === "el" && (
            <>
              <h1 className="about-title">Διονύσης Βελεντάκης</h1>
              <p className="about-description-el">
                Γεια σας! Είμαι ο Διονύσης Βελέντακης, ένας παθιασμένος
                φωτογράφος με οξυμένο βλέμμα για την αποτύπωση της ουσίας των
                θεμάτων μου. Με έδρα την Ελλάδα, έχω αφιερώσει την καριέρα μου
                στην εξερεύνηση του κόσμου μέσω του φακού, δημιουργώντας εικόνες
                που διηγούνται συναρπαστικές ιστορίες και προκαλούν
                συναισθήματα.
              </p>
              <p className="about-description-el">
                Κατά τη διάρκεια της πορείας μου στη φωτογραφία, είχα την τιμή
                να κερδίσω δύο καταξιωμένους διαγωνισμούς στην Ελλάδα,
                προβάλλοντας τη δουλειά μου τόσο σε εθνικό όσο και σε διεθνές
                επίπεδο. Είμαι περήφανος που αναγνωρίστηκα επίσης ανάμεσα στους
                50 καλύτερους φωτογράφους στην Ελλάδα για τη δουλειά μου στη
                φωτογράφιση ανδρικών πορτραίτων, μια επιτυχία που με εμπνέει να
                προχωρώ συνεχώς τα δημιουργικά μου όρια.
              </p>
              <p className="about-description-el">
                Η φωτογραφία δεν είναι απλώς επάγγελμα για μένα, είναι τρόπος
                ζωής. Το στυλ μου χαρακτηρίζεται από μια σύνθεση καλλιτεχνικής
                οπτικής και τεχνικής ακρίβειας, που μου επιτρέπει να δημιουργώ
                εντυπωσιακά και αξέχαστα πορτραίτα. Πιστεύω ότι κάθε φωτογραφία
                έχει τη δύναμη να συνδέει ανθρώπους και προσπαθώ να αποτυπώνω
                εκείνες τις αυθόρμητες στιγμές που αποκαλύπτουν το αληθινό
                πνεύμα των θεμάτων μου.
              </p>
              <p className="about-description-el">
                Όταν δεν βρίσκομαι πίσω από την κάμερα, μπορείτε να με βρείτε να
                εξερευνώ νέα τοπία ή να περνάω χρόνο με άλλους καλλιτέχνες,
                πάντα αναζητώντας έμπνευση στην ομορφιά που μας περιβάλλει.
              </p>
              <p className="about-description-el">
                Σας προσκαλώ να εξερευνήσετε το πορτφόλιο μου και να δείτε τον
                κόσμο μέσα από τα μάτια μου. Αν ενδιαφέρεστε να συνεργαστούμε ή
                απλώς θέλετε να συνδεθείτε, μη διστάσετε να επικοινωνήσετε μαζί
                μου!
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
