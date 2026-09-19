import { site } from "@/content/site";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export function Footer() {
    return <footer className="footer page-shell" id="contact"><div className="footer-top"><div><h2>Contact</h2></div></div>
        <div className="contact-grid"><a className="contact-link" href={`mailto:${site.contact.email}`}><span>Email</span>{site.contact.email}<i aria-hidden="true">↗</i></a><a className="contact-link" href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}><span>WhatsApp</span>{site.contact.whatsapp}<i aria-hidden="true">↗</i></a></div>
        <div className="footer-bottom"><div className="social-links">{site.contact.socials.map((social) => <a className="social-link" key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`Visit ${social.label}`}><span className="social-icon" aria-hidden="true">{social.label === "Instagram" ? <FaInstagram size={16} /> : <FaFacebookF size={16} />}</span><span>{social.label}</span><span aria-hidden="true">↗</span></a>)}</div><p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p></div>
    </footer>;
}