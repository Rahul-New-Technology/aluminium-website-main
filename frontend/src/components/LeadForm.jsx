import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import site from '../config/site';
import products from '../data/products';
import { trackEvent, trackConversion } from '../utils/track';

const REQUIREMENT_TYPES = ['Sell Scrap', 'Buy Material', 'Collection Request', 'Refining Enquiry', 'Other'];

const INITIAL = {
  name: '', company: '', phone: '', email: '', city: '', state: '',
  scrapType: '', quantity: '', requirement: '', message: '', website: '',
};

export default function LeadForm({ sourcePage, variant = 'quote', title = 'Send Us Your Requirement' }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [values, setValues] = useState(() => ({
    ...INITIAL,
    scrapType: params.get('product') ? (products.find((p) => p.slug === params.get('product'))?.name || '') : '',
    requirement: params.get('service') ? 'Refining Enquiry' : '',
  }));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | error

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = 'Please enter your full name';
    if (!/^[6-9]\d{9}$/.test(values.phone.replace(/[\s-]/g, ''))) er.phone = 'Enter a valid 10-digit Indian mobile number';
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) er.email = 'Enter a valid email address';
    if (!values.scrapType) er.scrapType = 'Please select a product / scrap type';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!validate()) return;
    if (values.website) { navigate('/thank-you'); return; } // honeypot tripped — pretend success

    setStatus('sending');
    const payload = {
      timestamp: new Date().toISOString(),
      name: values.name.trim(),
      company: values.company.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      city: values.city.trim(),
      state: values.state.trim(),
      scrapType: values.scrapType,
      quantity: values.quantity.trim(),
      requirement: values.requirement,
      message: values.message.trim(),
      sourcePage,
    };

    try {
      if (site.leadEndpoint) {
        // text/plain keeps this a "simple request" — Apps Script does not send CORS
        // headers, so no-cors avoids preflight failures; resolution = delivered.
        await fetch(site.leadEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });
      } else {
        // Demo mode: endpoint not configured yet (see src/config/site.js).
        await new Promise((r) => setTimeout(r, 900));
        console.info('[FINE ALLOYS] Lead endpoint not configured. Payload:', payload);
      }
      trackEvent('generate_lead', { form: variant, source: sourcePage });
      trackConversion();
      navigate('/thank-you');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate data-testid={`lead-form-${variant}`}>
      <h3 className="h-3" style={{ marginBottom: '1.4rem' }}>{title}</h3>
      <div className="form-grid">
        <div className="field">
          <label htmlFor={`${variant}-name`}>Full Name <em>*</em></label>
          <input id={`${variant}-name`} name="name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} data-testid="lead-name-input" />
          {errors.name && <span className="err" role="alert">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor={`${variant}-company`}>Company Name</label>
          <input id={`${variant}-company`} name="company" autoComplete="organization" value={values.company} onChange={set('company')} data-testid="lead-company-input" />
        </div>
        <div className="field">
          <label htmlFor={`${variant}-phone`}>Phone Number <em>*</em></label>
          <input id={`${variant}-phone`} name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" value={values.phone} onChange={set('phone')} aria-invalid={!!errors.phone} data-testid="lead-phone-input" />
          {errors.phone && <span className="err" role="alert">{errors.phone}</span>}
        </div>
        <div className="field">
          <label htmlFor={`${variant}-email`}>Email Address</label>
          <input id={`${variant}-email`} name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} data-testid="lead-email-input" />
          {errors.email && <span className="err" role="alert">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor={`${variant}-city`}>City</label>
          <input id={`${variant}-city`} name="city" autoComplete="address-level2" value={values.city} onChange={set('city')} data-testid="lead-city-input" />
        </div>
        <div className="field">
          <label htmlFor={`${variant}-state`}>State</label>
          <input id={`${variant}-state`} name="state" autoComplete="address-level1" value={values.state} onChange={set('state')} data-testid="lead-state-input" />
        </div>
        <div className="field">
          <label htmlFor={`${variant}-scrap`}>Product / Scrap Type <em>*</em></label>
          <select id={`${variant}-scrap`} name="scrapType" value={values.scrapType} onChange={set('scrapType')} aria-invalid={!!errors.scrapType} data-testid="lead-scraptype-select">
            <option value="">Select material type</option>
            {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
            <option value="Other">Other / Not Sure</option>
          </select>
          {errors.scrapType && <span className="err" role="alert">{errors.scrapType}</span>}
        </div>
        <div className="field">
          <label htmlFor={`${variant}-qty`}>Quantity (approx.)</label>
          <input id={`${variant}-qty`} name="quantity" placeholder="e.g. 500 kg / 2 MT" value={values.quantity} onChange={set('quantity')} data-testid="lead-quantity-input" />
        </div>
        {variant === 'quote' && (
          <div className="field field-full">
            <label htmlFor={`${variant}-req`}>Requirement Type</label>
            <select id={`${variant}-req`} name="requirement" value={values.requirement} onChange={set('requirement')} data-testid="lead-requirement-select">
              <option value="">Select requirement</option>
              {REQUIREMENT_TYPES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        )}
        <div className="field field-full">
          <label htmlFor={`${variant}-msg`}>Message</label>
          <textarea id={`${variant}-msg`} name="message" placeholder="Tell us about your material, quantity and location" value={values.message} onChange={set('message')} data-testid="lead-message-input" />
        </div>

        {/* Honeypot — invisible to humans, trips bots */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor={`${variant}-website`}>Website</label>
          <input id={`${variant}-website`} name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
        </div>
      </div>

      {status === 'error' && (
        <p className="form-error-banner" role="alert" style={{ marginTop: '1rem' }} data-testid="lead-form-error">
          Something went wrong while submitting. Please call us at {site.phoneDisplay} or WhatsApp us instead.
        </p>
      )}

      <div style={{ marginTop: '1.4rem', display: 'grid', gap: '0.9rem' }}>
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'} data-testid="lead-submit-button">
          {status === 'sending' ? (
            <><Loader2 size={17} className="spin" aria-hidden="true" /> SUBMITTING…</>
          ) : (
            <>SUBMIT ENQUIRY <ArrowRight size={16} className="arrow" aria-hidden="true" /></>
          )}
        </button>
        <p className="form-note">
          By submitting, you agree to be contacted regarding your enquiry. See our{' '}
          <a href="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
      </div>
    </form>
  );
}
