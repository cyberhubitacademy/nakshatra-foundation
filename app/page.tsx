"use client";

import { Brand, Label } from "@/components/brand";
import { programs } from "@/lib/programs";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Heart,
  BookOpen,
  BriefcaseBusiness,
  Users,
  HandHeart,
  Menu,
  X,
  MapPin,
  Check,
  Globe,
  ShieldCheck,
  ChevronRight,
  Building2,
} from "lucide-react";

type Modal =
  | "login"
  | "register"
  | "donate"
  | "support"
  | "sponsors"
  | "walkin"
  | "foundation"
  | "credits"
  | "privacy"
  | "menu"
  | number
  | null;

export default function Home() {
  const [modal, setModal] = useState<Modal>(null);
  const [success, setSuccess] = useState(false);
  const [frequency, setFrequency] = useState("One-time");
  const [amount, setAmount] = useState("1000");
  const dialog = useRef<HTMLDialogElement>(null);
  const open = (value: Modal) => {
    setSuccess(false);
    setModal(value);
  };
  useEffect(() => {
    if (modal !== null) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(true);
  };
  const containDialogFocus = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;
    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]',
      ),
    ).filter((element) => element.getClientRects().length > 0);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    }
  };
  const currentProgram = typeof modal === "number" ? programs[modal] : null;
  const jump = (id: string) => {
    setModal(null);
    window.setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      50,
    );
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="topbar">
        <div className="container">
          <span>Rooted in community. Reaching for possibility.</span>
          <a href="#support">
            Be a part of the change <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About Us</a>
            <button onClick={() => open(0)}>JSTE</button>
            <button onClick={() => open(1)}>Job Fairs</button>
            <button onClick={() => open(2)}>Campus Drives</button>
            <button onClick={() => open("walkin")}>Walk-in</button>
          </nav>
          <div className="header-actions">
            <button className="login-link" onClick={() => open("login")}>
              Login
            </button>
            <button
              className="registration-link"
              onClick={() => open("register")}
            >
              Registration
            </button>
            <button
              className="button red small"
              onClick={() => open("donate")}
            >
              <Heart size={16} /> Donate
            </button>
            <button
              className="menu-toggle icon-button"
              aria-label="Open navigation"
              onClick={() => open("menu")}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <Label>SMALL STEPS. BRIGHTER TOMORROWS.</Label>
              <h1>
                Every future{" "}
                <br />
                deserves
                <br />
                <span className="serif">a chance.</span>
              </h1>
              <p>
                Opening doors to education, skills, and opportunity.
                <br className="desktop-break" /> Together, we can help every
                potential shine.
              </p>
              <div className="hero-actions">
                <a href="#programs" className="button navy">
                  Explore initiatives <ArrowUpRight size={18} />
                </a>
                <button
                  className="button red"
                  onClick={() => open("donate")}
                >
                  <Heart size={18} /> Donate today
                </button>
              </div>
              <div className="hero-footnote">
                <span className="mini-star">✦</span>
                <span>One community. Countless possibilities.</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="image-frame">
                <picture>
                  <source
                    srcSet="/images/school-800.webp 800w, /images/school-1600.webp 1600w"
                    sizes="(max-width: 760px) 100vw, 52vw"
                  />
                  <img
                    src="/images/school-1600.webp"
                    alt="A smiling child carrying a school bag at a government primary school in Hyderabad, Telangana"
                    width="1600"
                    height="1067"
                    fetchPriority="high"
                  />
                </picture>
                <div className="photo-shade" />
                <span className="image-location">
                  <MapPin size={13} /> HYDERABAD, TELANGANA
                </span>
                <div className="image-caption">
                  <span className="serif">
                    Big dreams begin
                    <br />
                    with little steps.
                  </span>
                  <span className="caption-star" aria-hidden="true">
                    ✦
                  </span>
                </div>
              </div>
              <div className="hero-stamp">
                <BookOpen size={25} strokeWidth={1.5} />
                <span>
                  Learning today.
                  <br />
                  <strong>Leading tomorrow.</strong>
                </span>
              </div>
              <span className="orbit" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="pillars" aria-label="Our focus">
          <div className="container pillars-grid">
            <div>
              <BookOpen />
              <span>
                <strong>Education that empowers</strong>
                <small>A foundation for lifelong possibility</small>
              </span>
            </div>
            <div>
              <BriefcaseBusiness />
              <span>
                <strong>Opportunities that uplift</strong>
                <small>Bridging ambition and achievement</small>
              </span>
            </div>
            <div>
              <Users />
              <span>
                <strong>Communities that thrive</strong>
                <small>Growing stronger, together</small>
              </span>
            </div>
          </div>
        </section>

        <section className="about section container reveal" id="about">
          <div className="about-visual">
            <img
              src="/images/community-1000.webp"
              alt="School children participating in an outdoor recreational class at Shilparamam in Hyderabad"
              width="1000"
              height="746"
              loading="lazy"
            />
            <div className="about-note">
              <span className="serif">
                Potential is everywhere.
                <br />
                Opportunity should be, too.
              </span>
              <span>THE BELIEF THAT BRINGS US TOGETHER</span>
            </div>
          </div>
          <div className="about-copy">
            <Label>THE NAKSHATRA PURPOSE</Label>
            <h2>
              A brighter tomorrow
              <br />
              starts with <span className="serif">all of us.</span>
            </h2>
            <p>
              Every person carries a spark of possibility. At Nakshatra
              Foundation, our purpose is to help that spark find its way —
              through learning, meaningful work, and the strength of community.
            </p>
            <p>
              From a child’s first classroom to a young person’s first career
              opportunity, we bring people and possibilities closer together.
            </p>
            <div className="about-values">
              <span>
                <Check size={16} /> People at the heart
              </span>
              <span>
                <Check size={16} /> Possibility for everyone
              </span>
            </div>
            <button className="text-link" onClick={() => open("foundation")}>
              Get to know the foundation <ArrowUpRight size={18} />
            </button>
          </div>
        </section>

        <section className="program-section section" id="programs">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <Label>PATHWAYS TO POSSIBILITY</Label>
                <h2>
                  Different paths.
                  <br />
                  <span className="serif">One shared purpose.</span>
                </h2>
              </div>
              <p>
                Learning, earning, and giving back.
                <br />
                Explore initiatives that help people take
                <br className="desktop-break" /> their next meaningful step.
              </p>
            </div>
            <div className="program-grid">
              {programs.map((program, index) => (
                <button
                  className="program-card reveal"
                  onClick={() => open(index)}
                  key={program.title}
                >
                  <div className="card-top">
                    <span className="program-icon">
                      <program.icon size={25} strokeWidth={1.4} />
                    </span>
                    <span className="card-number">0{index + 1}</span>
                  </div>
                  <h3>{program.title}</h3>
                  <span className="program-label serif">{program.label}</span>
                  <p>{program.text}</p>
                  <span className="card-link">
                    Explore initiative <ArrowUpRight size={18} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          className="associations section container reveal"
          id="associations"
        >
          <div>
            <Label>ASSOCIATION WITH</Label>
            <h2>
              Shared values.
              <br />
              <span className="serif">Stronger possibilities.</span>
            </h2>
            <p>
              Connecting purpose with expertise to
              <br />
              build pathways for people and communities.
            </p>
          </div>
          <div className="partner-logos">
            <div className="partner">
              <span className="partner-monogram">
                KDP<span>↗</span>
              </span>
              <strong>KDP Gentech Pvt. Ltd.</strong>
            </div>
            <div className="partner">
              <span className="mindoxer-mark">
                <span aria-hidden="true">◈</span> mindoxer
              </span>
              <strong>Mindoxer Pvt. Ltd.</strong>
            </div>
            <small>Association names supplied for this foundation demo.</small>
          </div>
        </section>

        <section className="support-section" id="support">
          <div className="container support-grid">
            <div className="support-copy reveal">
              <Label>GIVE POSSIBILITY A HELPING HAND</Label>
              <h2>
                A little from you.
                <br />
                <span className="serif">A world of difference.</span>
              </h2>
              <p>
                A chance to learn. The confidence to begin.
                <br />A community that stands together.
                <br />
                Help make more of these moments possible.
              </p>
              <button className="button red" onClick={() => open("donate")}>
                <Heart size={18} /> Donate for a brighter future{" "}
                <ArrowUpRight size={18} />
              </button>
              <span className="support-small">
                Every act of kindness is a step forward.
              </span>
            </div>
            <div className="support-options reveal">
              <button onClick={() => open("sponsors")}>
                <Building2 size={27} />
                <div>
                  <h3>Become a sponsor</h3>
                  <p>Bring your organisation’s purpose to life.</p>
                </div>
                <ArrowUpRight />
              </button>
              <button onClick={() => open("support")}>
                <HandHeart size={27} />
                <div>
                  <h3>Support us</h3>
                  <p>Share your time, skills, or a helping hand.</p>
                </div>
                <ArrowUpRight />
              </button>
              <blockquote className="serif">
                “When we create opportunity,
                <br />
                we create a brighter future for everyone.”
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <Brand />
            <p>
              Creating opportunities.
              <br />
              Nurturing potential.
              <br />
              Building stronger communities.
            </p>
            <span className="footer-location">
              <MapPin size={15} /> Telangana, India
            </span>
          </div>
          <div>
            
          </div>
          <div>
            <h3>Our initiatives</h3>
            <button onClick={() => open(0)}>JSTE</button>
            <button onClick={() => open(1)}>Job Fairs</button>
            <button onClick={() => open(2)}>Campus Drives</button>
            <button onClick={() => open(3)}>Training Courses</button>
            <button onClick={() => open(4)}>Certification Courses</button>
            <button onClick={() => open(5)}>Social Services</button>
          </div>
          <div>
            <h3>Get involved</h3>
            <button onClick={() => open("sponsors")}>Sponsors</button>
            <button onClick={() => open("donate")}>Donation</button>
            <button onClick={() => open("support")}>Support Us</button>
            <button onClick={() => open("register")}>Registration</button>
            <button onClick={() => open("walkin")}>Walk-in</button>
          </div>
          <div className="footer-contact">
            <h3>Let’s connect</h3>
            <p>
              Good things begin
              <br />
              with a conversation.
            </p>
            <button className="text-link" onClick={() => open("support")}>
              Get in touch <ArrowUpRight size={16} />
            </button>
            <small>
              Contact details and social links
              <br />
              will be added before launch.
            </small>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Nakshatra Foundation</span>
          <span className="demo-tag">FRONTEND DEMO</span>
          <div>
            <button onClick={() => open("privacy")}>
              Privacy & demo information
            </button>
            <button onClick={() => open("credits")}>Photo credits</button>
          </div>
        </div>
      </footer>

      <dialog
        onKeyDown={containDialogFocus}
        ref={dialog}
        className={`modal ${modal === "menu" ? "menu-modal" : ""}`}
        onClose={() => setModal(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setModal(null);
        }}
        aria-labelledby="dialog-title"
      >
        <div className="modal-inner">
          <button
            className="modal-close icon-button"
            aria-label="Close dialog"
            onClick={() => setModal(null)}
          >
            <X size={21} />
          </button>
          {success ? (
            <div className="success-state" role="status">
              <div className="success-icon">
                <Check size={30} />
              </div>
              <Label>THANK YOU FOR TAKING A STEP</Label>
              <h2 id="dialog-title">
                {modal === "donate"
                  ? "A generous intention."
                  : modal === "login"
                    ? "You’re ready to explore."
                    : "You’re part of the possibility."}
              </h2>
              <p>
                {modal === "donate"
                  ? `Your ${frequency.toLowerCase()} ₹${Number(amount).toLocaleString("en-IN")} pledge has been previewed. No payment was taken and no recurring donation was created.`
                  : modal === "login"
                    ? "The demo sign-in is complete. No account was accessed or authenticated."
                    : "Your demo form is complete. No registration or enquiry was sent."}
              </p>
              <div className="demo-note">
                This is a frontend preview. Your details have not been stored or
                transmitted.
              </div>
              <button
                className="button navy full"
                onClick={() => setModal(null)}
              >
                Continue exploring <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <>
              {modal === "menu" && (
                <>
                  <h2 id="dialog-title">Explore Nakshatra</h2>
                  <nav aria-label="Mobile navigation" className="mobile-nav">
                    <button onClick={() => jump("about")}>
                      About Us <ChevronRight />
                    </button>
                    {programs.slice(0, 3).map((p, i) => (
                      <button key={p.title} onClick={() => open(i)}>
                        {p.title}
                        <ChevronRight />
                      </button>
                    ))}
                    <button onClick={() => open("walkin")}>
                      Walk-in <ChevronRight />
                    </button>
                    <button onClick={() => open("login")}>
                      Login <ChevronRight />
                    </button>
                    <button onClick={() => open("register")}>
                      Registration <ChevronRight />
                    </button>
                    <button
                      className="button red"
                      onClick={() => open("donate")}
                    >
                      <Heart size={18} /> Donate
                    </button>
                  </nav>
                </>
              )}
              {(modal === "login" || modal === "register") && (
                <>
                  <Label>YOUR NEXT CHAPTER</Label>
                  <h2 id="dialog-title">
                    {modal === "login"
                      ? "Welcome back."
                      : "Let’s begin together."}
                  </h2>
                  <p>
                    {modal === "login"
                      ? "Explore your next opportunity with Nakshatra."
                      : "Take the first step towards learning, opportunity, and community."}
                  </p>
                  <div className="demo-note">
                    Demo only. Please use sample details and a made-up password.
                    Nothing is saved or sent.
                  </div>
                  <form onSubmit={submit}>
                    {modal === "register" && (
                      <label>
                        Full name
                        <input
                          name="name"
                          placeholder="Your name"
                          autoComplete="off"
                          required
                          minLength={2}
                          maxLength={80}
                        />
                      </label>
                    )}
                    <label>
                      Email address
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="off"
                        required
                        maxLength={120}
                      />
                    </label>
                    <label>
                      Password
                      <input
                        name="password"
                        type="password"
                        placeholder="At least 8 characters"
                        minLength={8}
                        autoComplete="off"
                        required
                        maxLength={128}
                      />
                    </label>
                    {modal === "register" && (
                      <label>
                        I’m interested in
                        <select name="interest">
                          <option>Education and training</option>
                          <option>Job opportunities</option>
                          <option>Volunteering</option>
                          <option>Partnerships</option>
                        </select>
                      </label>
                    )}
                    <button className="button navy full" type="submit">
                      {modal === "login"
                        ? "Preview login"
                        : "Preview registration"}{" "}
                      <ArrowRight size={18} />
                    </button>
                  </form>
                  <p className="modal-switch">
                    {modal === "login"
                      ? "New to Nakshatra?"
                      : "Already exploring with us?"}{" "}
                    <button
                      onClick={() =>
                        open(modal === "login" ? "register" : "login")
                      }
                    >
                      {modal === "login" ? "Register here" : "Log in"}
                    </button>
                  </p>
                </>
              )}
              {modal === "donate" && (
                <>
                  <Label>MAKE ROOM FOR POSSIBILITY</Label>
                  <h2 id="dialog-title">Give a brighter tomorrow.</h2>
                  <p>
                    Choose how you would like to support education and
                    opportunity.
                  </p>
                  <div className="demo-note">
                    <ShieldCheck size={18} /> Donation preview only. No money
                    will be collected.
                  </div>
                  <form onSubmit={submit}>
                    <div className="segmented" aria-label="Donation frequency">
                      {["One-time", "Monthly"].map((f) => (
                        <button
                          type="button"
                          key={f}
                          aria-pressed={frequency === f}
                          className={frequency === f ? "selected" : ""}
                          onClick={() => setFrequency(f)}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                    <span className="field-label">Choose an amount</span>
                    <div className="amounts">
                      {["500", "1000", "2500", "5000"].map((a) => (
                        <button
                          key={a}
                          type="button"
                          aria-pressed={amount === a}
                          className={amount === a ? "selected" : ""}
                          onClick={() => setAmount(a)}
                        >
                          ₹{Number(a).toLocaleString("en-IN")}
                        </button>
                      ))}
                    </div>
                    <label>
                      Or enter an amount (₹)
                      <input
                        type="number"
                        min="1"
                        max="10000000"
                        step="1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Where would you like to help?
                      <select>
                        <option>Where it is needed most</option>
                        <option>Education and learning</option>
                        <option>Skills and career opportunities</option>
                        <option>Community initiatives</option>
                      </select>
                    </label>
                    <button type="submit" className="button red full">
                      <Heart size={18} /> Preview {frequency.toLowerCase()}{" "}
                      pledge
                    </button>
                    <small className="form-footnote">
                      A preview does not create a payment, receipt, or tax
                      benefit.
                    </small>
                  </form>
                </>
              )}
              {currentProgram && (
                <>
                  <span className="modal-program-icon">
                    <currentProgram.icon size={32} />
                  </span>
                  <Label>PATHWAYS TO POSSIBILITY</Label>
                  <h2 id="dialog-title">{currentProgram.title}</h2>
                  <p className="serif modal-subtitle">{currentProgram.label}</p>
                  <p>{currentProgram.detail}</p>
                  <ul className="detail-list">
                    {currentProgram.points.map((p) => (
                      <li key={p}>
                        <Check size={17} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="demo-note">
                    Programme schedules, locations, and availability are not
                    published in this demo. No live applications are being
                    accepted.
                  </div>
                  <button
                    className="button navy full"
                    onClick={() => open("register")}
                  >
                    Explore registration <ArrowRight size={18} />
                  </button>
                </>
              )}
              {(modal === "support" ||
                modal === "sponsors" ||
                modal === "walkin") && (
                <>
                  <Label>
                    {modal === "walkin"
                      ? "TAKE YOUR NEXT STEP"
                      : "TOGETHER, WE CAN DO MORE"}
                  </Label>
                  <h2 id="dialog-title">
                    {modal === "sponsors"
                      ? "Partner with possibility."
                      : modal === "walkin"
                        ? "Walk-in opportunities."
                        : "Everyone has something to give."}
                  </h2>
                  <p>
                    {modal === "sponsors"
                      ? "Start a conversation about supporting education, career pathways, and community initiatives."
                      : modal === "walkin"
                        ? "No walk-in events are currently listed in this demo. Preview an interest form for future opportunities."
                        : "Bring your time, your skills, or your ideas. Explore how you could support the foundation."}
                  </p>
                  <div className="demo-note">
                    Demo form — use sample details. Nothing will be sent or
                    saved.
                  </div>
                  <form onSubmit={submit}>
                    <label>
                      {modal === "sponsors" ? "Organisation name" : "Full name"}
                      <input
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder={
                          modal === "sponsors"
                            ? "Your organisation"
                            : "Your name"
                        }
                      />
                    </label>
                    <label>
                      Email address
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        maxLength={120}
                      />
                    </label>
                    <label>
                      {modal === "walkin"
                        ? "Area of interest"
                        : "How would you like to help?"}
                      <select>
                        {(modal === "sponsors"
                          ? [
                              "Sponsor an initiative",
                              "Explore a corporate partnership",
                              "Contribute resources",
                            ]
                          : modal === "walkin"
                            ? [
                                "Job opportunities",
                                "Career guidance",
                                "Training and certification",
                              ]
                            : [
                                "Volunteer my time",
                                "Share professional skills",
                                "Support an initiative",
                                "General enquiry",
                              ]
                        ).map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Your message <span className="optional">(optional)</span>
                      <textarea
                        rows={3}
                        maxLength={1000}
                        placeholder="Tell us a little more…"
                      />
                    </label>
                    <button className="button navy full" type="submit">
                      Preview enquiry <ArrowRight size={18} />
                    </button>
                  </form>
                </>
              )}
              {modal === "foundation" && (
                <>
                  <Label>OUR FOUNDATION</Label>
                  <h2 id="dialog-title">Built around possibility.</h2>
                  <p>
                    Nakshatra Foundation brings education, career pathways, and
                    community support into one shared vision: more opportunity
                    for more people.
                  </p>
                  <div className="info-row">
                    <Globe />
                    <div>
                      <h3>Website</h3>
                      <p>
                        You are viewing the foundation’s frontend website demo.
                      </p>
                    </div>
                  </div>
                  <div className="info-row">
                    <Globe />
                    <div>
                      <h3>Domain</h3>
                      <p>
                        The official domain will be confirmed before launch.
                      </p>
                    </div>
                  </div>
                  <div className="info-row">
                    <ShieldCheck />
                    <div>
                      <h3>IP Registration</h3>
                      <p>
                        Verified intellectual property registration details will
                        be provided by the foundation. This demo makes no
                        registration claim.
                      </p>
                    </div>
                  </div>
                  <a
                    className="button navy full"
                    href="#programs"
                    onClick={() => setModal(null)}
                  >
                    Explore initiatives <ArrowRight size={18} />
                  </a>
                </>
              )}
              {modal === "privacy" && (
                <>
                  <Label>ABOUT THIS PREVIEW</Label>
                  <h2 id="dialog-title">Privacy & demo information</h2>
                  <p>
                    This website is a frontend demonstration for Nakshatra
                    Foundation. Forms run only in your browser. They do not
                    create accounts, send messages, process donations, or store
                    your entries.
                  </p>
                  <p>
                    No analytics or advertising trackers are included. Fonts and
                    photographs are served with the site. Your hosting provider
                    may retain standard access logs.
                  </p>
                  <p>
                    Programme details, legal information, contact details,
                    association approvals, and donation arrangements must be
                    verified before a public operational launch.
                  </p>
                  <p>
                    Photographs illustrate education in Telangana; they do not
                    imply the people or schools pictured are beneficiaries of,
                    or affiliated with, Nakshatra Foundation.
                  </p>
                </>
              )}
              {modal === "credits" && (
                <>
                  <Label>REAL PLACES. RESPECTFUL STORIES.</Label>
                  <h2 id="dialog-title">Photography credits</h2>
                  <p>
                    Images show school children in Hyderabad, Telangana. They
                    are illustrative and do not imply affiliation with the
                    foundation.
                  </p>
                  <div className="info-row">
                    <div>
                      <h3>Government primary school, Hyderabad</h3>
                      <p>
                        Photograph by Nishant kumar.{" "}
                        <a
                          href="https://commons.wikimedia.org/wiki/File:Govt._school_india.JPG"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Original image
                        </a>{" "}
                        ·{" "}
                        <a
                          href="https://creativecommons.org/licenses/by-sa/3.0/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          CC BY-SA 3.0
                        </a>
                        . Resized, compressed, and cropped for display.
                      </p>
                    </div>
                  </div>
                  <div className="info-row">
                    <div>
                      <h3>Recreational class, Hyderabad</h3>
                      <p>
                        Photograph by Jose Murilo Junior.{" "}
                        <a
                          href="https://commons.wikimedia.org/wiki/File:School_children_in_Hyderabad,_India.JPG"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Original image
                        </a>{" "}
                        ·{" "}
                        <a
                          href="https://creativecommons.org/licenses/by-sa/2.0/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          CC BY-SA 2.0
                        </a>
                        . Resized, compressed, and cropped for display.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
