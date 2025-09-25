export default function LandingPage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      color: 'black',
      padding: '48px 24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Hero Section */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
          Most writers are obsessed with one script.
        </h1>
        <h2 style={{ fontSize: '28px', fontWeight: '500', marginBottom: '24px' }}>
          The pros are building a writing life.
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '40px', lineHeight: '1.6' }}>
          If you're still polishing the same draft and hoping this is the one…
          it's time for a bigger vision.<br />
          Scripts don't fail because they're "not good enough."<br />
          They fail because they're not <strong>undeniable</strong>.
        </p>
      </section>

      {/* About Me */}
      <section style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>I'm J. David Stem.</h3>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
          I've written <em>Shrek 2</em>, <em>Jimmy Neutron</em>, <em>Rugrats</em>, and
          more for studios like Disney, DreamWorks, and Paramount. My films
          have grossed over <strong>$2.5 billion</strong> worldwide.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          But what I'm proudest of? Mentoring writers who went from floundering
          to fearless — by learning to build <strong>systems</strong>, not just
          <strong> scripts</strong>.
        </p>
      </section>

      {/* Lead Magnet Offer */}
      <section style={{
        backgroundColor: '#f3f4f6',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto 40px'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>
          📥 Download my free guide: "The 10 Rules for a Writing Life"
        </h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>Why 99% of writers fail — and how to avoid becoming one of them</li>
          <li>What your first 2 pages must do (or you've already lost)</li>
          <li>How to break through resistance and get unstuck — <em>every time</em></li>
          <li>The mental shift that separates dabblers from professionals</li>
          <li>How to write with consistency, not just inspiration</li>
        </ul>
      </section>

      {/* Mailchimp Form */}
      <section style={{ maxWidth: '500px', margin: '0 auto 64px' }}>
        <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', textAlign: 'center' }}>
          Ready to stop rewriting the same script and start building a career?
        </h4>
        <div id="mc_embed_shell">
          <div id="mc_embed_signup" style={{ background: '#fff', clear: 'left', width: '100%' }}>
            <form 
              action="https://app.us4.list-manage.com/subscribe/post?u=ca0b20880c4b7009f8c6319e9&id=60a3c9abaa&f_id=002d04e3f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              target="_blank"
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div id="mc_embed_signup_scroll">
                <input 
                  type="email" 
                  name="EMAIL" 
                  className="required email" 
                  id="mce-EMAIL" 
                  required 
                  placeholder="Email Address"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_ca0b20880c4b7009f8c6319e9_60a3c9abaa" tabIndex="-1" />
                </div>
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  style={{
                    width: '100%',
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '16px',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  ✅ Get Access to The 10 Rules
                </button>
                <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '14px', color: '#666' }}>
                  After subscribing, you'll be redirected to access the guide in our Skool community.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <footer style={{ textAlign: 'center', fontSize: '14px', color: '#6b7280' }}>
        <p style={{ marginBottom: '16px' }}>
          This isn't a newsletter. It's the start of something bigger.
        </p>
        <p>
          <strong>Stop waiting for a lucky break.</strong> Start building the
          writing life that doesn't need one.
        </p>
      </footer>

      {/* Redirect Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.getElementById('mc-embedded-subscribe-form').addEventListener('submit', function(e) {
          setTimeout(function() {
            window.location.href = 'https://www.skool.com/the-writers-forge/j-david-stems-10-iron-clad-rules-for-a-writing-life?p=c06dc1c4';
          }, 1000);
        });
      `}} />
    </main>
  );
}
