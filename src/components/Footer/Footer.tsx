import { Container } from './styles';

import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import whatsapp from '../../assets/whatsapp.png';
import telegram from '../../assets/telegram.png';
import instagramIcon from '../../assets/instagram.png';
import discordIcon from '../../assets/discord.png';

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Sujal</span>
        <span>Peswani</span>
      </a>

      <p className="copyright">
        Copyrights © 2024 All Rights Reserved by Peswani_Ji
      </p>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/sujal50/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Peswaniji" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href="https://t.me/Peswani_Jii" target="_blank" rel="noreferrer">
          <img src={telegram} alt="Telegram" />
        </a>
        <a href="https://www.instagram.com/peswani_ji_/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://discord.com/channels/@me" target="_blank" rel="noreferrer">
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  );
}
