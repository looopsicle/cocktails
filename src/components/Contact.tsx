import gsap from "gsap";
import { openingHours, socials } from "../../constants";

function Contact() {
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                </div>
                
                <div>
                    <h3>Contact Us</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@velvetpour.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>{time.day}:{time.time}</p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((soc) => (
                            <a key={soc.name} href={soc.url} target="_blank" rel="noopener noreferrer" aria-label={soc.name}><img src={soc.icon} /></a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact