"use client";
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function joinList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nobody Warned Me About The Quiet, home">
          <span>VANESSA DE VEAUX</span>
        </a>
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>The Book</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>The App</a>
          <a href="#author" onClick={() => setMenuOpen(false)}>Author</a>
          <a className="nav-cta" href="#reserve" onClick={() => setMenuOpen(false)}>Notify me</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow">THE DEBUT COLLECTION OF POETRY &amp; ESSAYS</p>
          <h1>Nobody warned me<br />about the <em>Quiet.</em></h1>
          <p className="hero-deck">
            Grief does not end when the noise fades. It settles into ordinary days and
            changes the shape of memory. Vanessa De Veaux writes from inside that silence
            for anyone learning to live beside an absence that cannot be replaced.
          </p>
          <div className="hero-signup">
            <p>Be first to know the release date.</p>
          </div>
          <div className="hero-actions">
            <a className="button gold" href="#reserve">Notify me <Arrow /></a>
            <a className="text-link" href="#excerpt">Read an excerpt <span>↓</span></a>
          </div>
        </div>

        <div className="hero-scene" aria-label="Nobody Warned Me About The Quiet book beside a candlelit window">
          <img className="hero-inspiration" src="/images/hero-scene.png" alt="A candlelit writing desk with burgundy flowers, an open journal, and a glowing dusk window" />
          <div className="hero-book">
            <img src="/images/book-cover.png" alt="Nobody Warned Me About The Quiet by Vanessa De Veaux book cover" />
          </div>
          <div className="hero-phone" aria-label="The Quiet Hour Journal app displayed on an Android-style phone beside the book">
            <i aria-hidden="true" />
            <div>
              <img src="/images/quiet-hour-journal-clean.png" alt="The Quiet Hour Journal app screen" />
            </div>
          </div>
          <p className="vertical-note">THE QUIET AFTER THE LOUD PART</p>
        </div>
      </section>

      <section className="truth-strip">
        <p>This is not a book about healing.</p>
        <span>◆</span>
        <p>It is about the quiet that comes before healing. If it ever comes.</p>
      </section>

      <section className="about section" id="about">
        <div className="section-label">The Book</div>
        <div className="about-heading">
          <p className="kicker">WRITTEN FROM THE MIDDLE. FROM THE FLOOR OF IT.</p>
          <h2>A love story.<br />The <em>saddest kind.</em></h2>
        </div>
        <div className="about-copy">
          <p className="dropcap">
            Nobody Warned Me About The Quiet is Vanessa De Veaux&apos;s unflinching debut
            collection, written after the loss of her father, mother, and younger sister.
          </p>
          <p>
            Across poems, essays, letters, and unsent messages, she writes about the way
            loss rearranges a life: the full tables that hurt more than the empty one, the
            saved voicemail she cannot play or delete, and the mornings when simply putting
            both feet on the floor is an invisible act of courage.
          </p>
          <p>
            This book does not turn grief into a lesson or rush toward a clean resolution.
            It tells the truth about love, silence, survival, and learning to live beside
            an absence that does not leave.
          </p>
        </div>
        <div className="book-details four-part">
          <div><strong>Before</strong><span>The ordinary love and glorious noise that once filled a home</span></div>
          <div><strong>After</strong><span>The phone calls, birthdays, tables, and silences left behind</span></div>
          <div><strong>The Stillness</strong><span>When grief stops collapsing you and begins living beside you</span></div>
          <div><strong>The Becoming</strong><span>The quiet, daily choice to remain here and keep going</span></div>
        </div>
      </section>

      <section className="journal section" id="journal">
        <div className="journal-visual">
          <div className="android-phone" aria-label="The Quiet Hour Journal app displayed on an Android-style phone">
            <i className="phone-camera" aria-hidden="true" />
            <div className="android-phone-screen">
              <img src="/images/quiet-hour-journal-clean.png" alt="The Quiet Hour Journal digital app screen" />
            </div>
          </div>
          <span className="digital-tag"><strong>AVAILABLE NOW</strong><small>BUY THE APP</small></span>
        </div>
        <div className="journal-copy">
          <div className="section-label">The Digital Companion</div>
          <p className="kicker">A PRIVATE PLACE FOR WHAT SURFACES</p>
          <h2>Meet yourself in<br />the <em>Quiet Hour.</em></h2>
          <p>
            The Quiet Hour Journal is a digital journaling app, not another book to place
            on a shelf. It is a private space for the thoughts, memories, anger, and questions
            that surface while reading, or in the quiet hours when you need somewhere honest to land.
          </p>
          <ul>
            <li>Gentle prompts for grief, memory, identity, and becoming</li>
            <li>Open digital entries for the words with nowhere else to go</li>
            <li>A personal journal you can return to from your phone</li>
          </ul>
          <p className="available-now"><span /> The Quiet Hour Journal is available now.</p>
          <a className="button gold journal-buy" href="https://vanessadvx.com" aria-label="Buy The Quiet Hour Journal app">Buy the app now <Arrow /></a>
        </div>
      </section>

      <section className="excerpt" id="excerpt">
        <div className="excerpt-inner">
          <p className="kicker">FROM THE TITLE POEM</p>
          <blockquote>
            “They told me grief would be loud. That it would come like a storm, announced
            and dramatic. Nobody warned me about the quiet. The specific silence of a house
            that used to hold four people and now holds one.”
          </blockquote>
          <div className="quote-mark">“</div>
          <p className="excerpt-label">FROM<br /><em>NOBODY WARNED ME ABOUT THE QUIET</em></p>
        </div>
      </section>

      <section className="author section" id="author">
        <div className="author-photo-wrap">
          <img src="/images/vanessa-de-veaux.png" alt="Author Vanessa De Veaux seated in a warm candlelit room" />
        </div>
        <div className="author-title">
          <div className="section-label">The Author</div>
          <h2>She wrote it so you<br />would not have to sit<br /><em>in the Quiet alone.</em></h2>
        </div>
        <div className="author-note">
          <p className="signature">Vanessa</p>
          <p>
            Vanessa De Veaux is a writer, creative, and traveler. Her work spans poetry,
            storytelling, and music, always rooted in the belief that the most honest art
            comes from the most difficult places.
          </p>
          <p>
            <em>Nobody Warned Me About The Quiet</em> is her debut collection and the first
            in a trilogy written from inside the darkest season of her life, offered without
            apology to anyone who needs it.
          </p>
        </div>
      </section>

      <section className="preorder" id="reserve">
        <div className="preorder-copy">
          <p className="kicker">BE FIRST TO KNOW</p>
          <h2>Hear it first when<br />the <em>Quiet arrives.</em></h2>
          <p>
            Join the early reader list to receive the release announcement before it is
            shared publicly, plus early reader bonuses and Quiet Hour Journal updates.
          </p>
          {submitted ? (
            <div className="success" role="status">
              <span>♥</span>
              <div><strong>You are on the first-to-know list.</strong><br />The release announcement will come to you first.</div>
            </div>
          ) : (
            <form onSubmit={joinList}>
              <label htmlFor="email">Email address</label>
              <div className="form-row">
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
                <button type="submit">Notify me <Arrow /></button>
              </div>
              <p>Book and journal updates only. No noise. Your inbox has been through enough.</p>
            </form>
          )}
        </div>
        <div className="preorder-books" aria-hidden="true">
          <div className="book-halo" />
          <div className="front-book"><img src="/images/book-cover.png" alt="" /></div>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">Nobody Warned Me About The Quiet</a>
        <p>Poetry &amp; essays by Vanessa De Veaux</p>
        <p className="footer-contact"><a href="mailto:books@vanessadvx.com">books@vanessadvx.com</a><span>•</span><a href="https://vanessadvx.com">vanessadvx.com</a></p>
        <div><span>© 2026 Vanessa De Veaux</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
