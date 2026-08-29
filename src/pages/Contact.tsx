import { useState } from 'react';
import { useLanguage } from '../i18n/context';

type Status = 'idle' | 'submitting' | 'success';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { t, dir } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const serviceOptions = t('contact.form.serviceOptions') as unknown as { value: string; label: string }[];
  const budgetOptions = t('contact.form.budgetOptions') as unknown as { value: string; label: string }[];

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = t('contact.form.errors.name');
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = t('contact.form.errors.email');
    if (form.message.trim().length < 20) e.message = t('contact.form.errors.message');
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((er) => ({ ...er, [e.target.name]: undefined }));
    }
  }

  const inputClass = "w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";
  const errorClass = "text-red-500 text-xs mt-1.5";

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-foreground to-primary/80">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">{t('contact.title')}</h1>
          <p className="text-white/60 text-lg">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-3 gap-12 ${dir === 'rtl' ? 'lg:flex lg:flex-row-reverse' : ''}`}>
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-serif text-xl font-semibold text-green-800">{t('contact.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>{t('contact.form.name')}</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t('contact.form.name')}
                      />
                      {errors.name && <p className={errorClass}>{errors.name}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>{t('contact.form.email')}</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="email@company.com"
                      />
                      {errors.email && <p className={errorClass}>{errors.email}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>{t('contact.form.phone')}</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+212 600 000 000"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t('contact.form.company')}</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t('contact.form.company')}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t('contact.form.service')}</label>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                        {Array.isArray(serviceOptions) && serviceOptions.map((o: { value: string; label: string }) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>{t('contact.form.budget')}</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                        {Array.isArray(budgetOptions) && budgetOptions.map((o: { value: string; label: string }) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className={labelClass}>{t('contact.form.message')}</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t('contact.form.message')}
                    />
                    {errors.message && <p className={errorClass}>{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-60 transition-colors"
                  >
                    {status === 'submitting' ? '...' : t('contact.form.submitBtn')}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
                {[
                  {
                    label: t('contact.info.addressLabel'),
                    value: t('contact.info.address'),
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: t('contact.info.emailLabel'),
                    value: t('contact.info.email'),
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: t('contact.info.phoneLabel'),
                    value: t('contact.info.phone'),
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                  },
                  {
                    label: t('contact.info.hoursLabel'),
                    value: t('contact.info.hours'),
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className={`flex gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className={dir === 'rtl' ? 'text-right' : ''}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="text-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
