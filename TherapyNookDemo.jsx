
import React from "react";

function TherapyNookDemo() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>TherapyNook</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        Empowering therapists and clients with accessible, engaging, and evidence-informed resources between sessions.
      </p>
      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Client Resources</h2>
      <ul>
        <li>Anxiety & Depression</li>
        <li>Trauma-Informed Care</li>
        <li>Boundaries & Codependency</li>
        <li>ADHD & Autism Support</li>
        <li>Self-Compassion & Mindfulness</li>
        <li>Grief & Life Transitions</li>
        <li>Somatic Awareness & Emotional Regulation</li>
        <li>Relationship & Co-Parenting Tools</li>
      </ul>
      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Therapist Tools</h2>
      <ul>
        <li>Model-Based Interventions</li>
        <li>Client-Ready PDF Tools</li>
        <li>Private Practice Building Tips</li>
        <li>CEUs & Clinical Research</li>
        <li>Therapist Self-Care & Burnout Prevention</li>
        <li>Insurance & Billing Guidance</li>
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <input type="email" placeholder="Your email address" style={{ padding: '0.5rem', fontSize: '1rem', width: '60%' }} />
        <button style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem', fontSize: '1rem' }}>Join the Waitlist</button>
      </div>
    </main>
  );
}

export default TherapyNookDemo;
