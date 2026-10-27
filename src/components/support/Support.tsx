"use client";
import React, { useId, useMemo, useRef, useState } from 'react';
import {
    ArrowRight,
    ChevronDown,
    HeartPulse,
    Mail,
    NotebookPen,
    Search,
    SearchX,
    Shirt,
    Target,
    UserRound,
    Wrench,
    X,
    type LucideIcon,
} from 'lucide-react';
import './support.css';

const SUPPORT_EMAIL = 'support@superbae.co';
const MAILTO = `mailto:${SUPPORT_EMAIL}`;

type CategoryId = 'account' | 'planner' | 'habits' | 'wardrobe' | 'goals' | 'troubleshooting';

type Category = {
    id: CategoryId;
    title: string;
    description: string;
    icon: LucideIcon;
    tone: string;
};

type Faq = {
    id: string;
    question: string;
    /** Plain-text answer, used for search and as the default rendered answer. */
    answerText: string;
    /** Rich answer (e.g. with links); falls back to answerText. */
    answer?: React.ReactNode;
    categories: CategoryId[];
};

const CATEGORIES: Category[] = [
    {
        id: 'account',
        title: 'Account & Profile',
        description: 'Help with getting started, profile settings, and account access.',
        icon: UserRound,
        tone: 'pink',
    },
    {
        id: 'planner',
        title: 'Planner & Journaling',
        description: 'Questions about planning your day, recording thoughts, and organizing your routines.',
        icon: NotebookPen,
        tone: 'lilac',
    },
    {
        id: 'habits',
        title: 'Habits & Wellness',
        description: 'Help with habit tracking, goals, sleep, mood, and personal progress.',
        icon: HeartPulse,
        tone: 'mint',
    },
    {
        id: 'wardrobe',
        title: 'Wardrobe & Lifestyle',
        description: 'Questions about organizing outfits and managing lifestyle features.',
        icon: Shirt,
        tone: 'peach',
    },
    {
        id: 'goals',
        title: 'Goals & Vision Boards',
        description: 'Help with saving inspiration, creating vision boards, and tracking personal goals.',
        icon: Target,
        tone: 'sky',
    },
    {
        id: 'troubleshooting',
        title: 'App Troubleshooting',
        description: 'Guidance for app issues, updates, loading problems, and general technical difficulties.',
        icon: Wrench,
        tone: 'butter',
    },
];

const EmailLink = () => <a href={MAILTO} className="sp-inline-link">{SUPPORT_EMAIL}</a>;

const FAQS: Faq[] = [
    {
        id: 'getting-started',
        question: 'How do I get started with Superbae?',
        answerText: 'Download the Superbae app, follow the on-screen setup instructions, and explore the features that help you organize your daily life.',
        categories: ['account'],
    },
    {
        id: 'what-can-i-do',
        question: 'What can I do with the Superbae app?',
        answerText: 'Superbae brings lifestyle planning together in one place, with features for journaling, wardrobe organization, habits, goals, wellness, and community.',
        categories: ['planner', 'wardrobe', 'goals', 'habits'],
    },
    {
        id: 'habits-goals',
        question: 'How can I manage my habits and goals?',
        answerText: 'Explore the relevant tracking and planning features in the app to record your progress and stay organized with your personal goals.',
        categories: ['habits', 'goals', 'planner'],
    },
    {
        id: 'not-working',
        question: "What should I do if the app isn't working properly?",
        answerText: "Try closing and reopening the app, checking your internet connection, and ensuring that you have the latest version installed. If the issue continues, contact our support team.",
        answer: (
            <>
                Try closing and reopening the app, checking your internet connection, and ensuring that you have the
                latest version installed. If the issue continues, <a href="#contact" className="sp-inline-link">contact our support team</a>.
            </>
        ),
        categories: ['troubleshooting'],
    },
    {
        id: 'contact-support',
        question: 'How can I contact Superbae support?',
        answerText: `Email us at ${SUPPORT_EMAIL} and explain the issue you're experiencing. Include relevant details so our team can better understand your request.`,
        answer: (
            <>
                Email us at <EmailLink />{' '}and explain the issue you&apos;re experiencing. Include relevant details so our
                team can better understand your request.
            </>
        ),
        categories: ['account', 'troubleshooting'],
    },
    {
        id: 'feedback',
        question: 'How can I share feedback or suggest a new feature?',
        answerText: `We welcome your feedback and suggestions. Email ${SUPPORT_EMAIL} with your ideas or feedback about your experience.`,
        answer: (
            <>
                We welcome your feedback and suggestions. Email <EmailLink />{' '}with your ideas or feedback about your
                experience.
            </>
        ),
        categories: ['account', 'troubleshooting'],
    },
];

const normalize = (value: string) => value.toLowerCase().replace(/[’']/g, "'").trim();

const Support: React.FC = () => {
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
    const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());
    const faqRef = useRef<HTMLElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const baseId = useId();

    const filteredFaqs = useMemo(() => {
        const terms = normalize(query).split(/\s+/).filter(Boolean);
        return FAQS.filter((faq) => {
            if (activeCategory && !faq.categories.includes(activeCategory)) return false;
            if (!terms.length) return true;
            const haystack = normalize(`${faq.question} ${faq.answerText}`);
            return terms.every((term) => haystack.includes(term));
        });
    }, [query, activeCategory]);

    const activeCategoryTitle = CATEGORIES.find((c) => c.id === activeCategory)?.title;
    const isFiltering = Boolean(query.trim() || activeCategory);

    const scrollToFaqs = () => {
        faqRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const toggleFaq = (id: string) => {
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const selectCategory = (id: CategoryId) => {
        setActiveCategory((prev) => (prev === id ? null : id));
        scrollToFaqs();
    };

    const clearFilters = () => {
        setQuery('');
        setActiveCategory(null);
    };

    const resultLabel = `${filteredFaqs.length} ${filteredFaqs.length === 1 ? 'answer' : 'answers'} found`;

    return (
        <main className="sp-page">
            {/* ─── Hero ─── */}
            <section className="sp-hero" aria-labelledby="sp-hero-title">
                <span className="sp-badge">Superbae Support</span>
                <h1 id="sp-hero-title" className="sp-hero__title">
                    We&apos;re Here to <span className="sp-gradient-text">Help</span>
                </h1>
                <p className="sp-hero__description">
                    Have a question about Superbae? Whether you&apos;re planning your day, tracking your habits,
                    organizing your wardrobe, or exploring your goals, we&apos;re here to make your experience smoother.
                </p>

                <form
                    className="sp-search"
                    role="search"
                    onSubmit={(e) => {
                        e.preventDefault();
                        scrollToFaqs();
                    }}
                >
                    <label htmlFor="sp-search-input" className="sp-visually-hidden">Search for help</label>
                    <Search className="sp-search__icon" aria-hidden="true" />
                    <input
                        id="sp-search-input"
                        ref={searchInputRef}
                        type="search"
                        className="sp-search__input"
                        placeholder="Search for help..."
                        autoComplete="off"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-describedby="sp-search-status"
                    />
                    {query && (
                        <button
                            type="button"
                            className="sp-search__clear"
                            onClick={() => {
                                setQuery('');
                                searchInputRef.current?.focus();
                            }}
                            aria-label="Clear search"
                        >
                            <X aria-hidden="true" />
                        </button>
                    )}
                </form>

                <p id="sp-search-status" className="sp-hero__support-line" aria-live="polite">
                    {query.trim() ? (
                        <>
                            {resultLabel}.{' '}
                            {filteredFaqs.length > 0 && (
                                <button type="button" className="sp-text-button" onClick={scrollToFaqs}>
                                    View answers
                                </button>
                            )}
                        </>
                    ) : (
                        'Find answers to common questions or reach out to our support team.'
                    )}
                </p>
            </section>

            {/* ─── Help Categories ─── */}
            <section className="sp-section" aria-labelledby="sp-categories-title">
                <div className="sp-section__header">
                    <h2 id="sp-categories-title" className="sp-section__title">Browse by topic</h2>
                    <p className="sp-section__subtitle">Choose a topic to see the questions related to it.</p>
                </div>

                <ul className="sp-categories">
                    {CATEGORIES.map(({ id, title, description, icon: Icon, tone }) => {
                        const isActive = activeCategory === id;
                        return (
                            <li key={id}>
                                <button
                                    type="button"
                                    className={`sp-category sp-tone--${tone}${isActive ? ' is-active' : ''}`}
                                    aria-pressed={isActive}
                                    aria-controls="sp-faq-list"
                                    onClick={() => selectCategory(id)}
                                >
                                    <span className="sp-category__icon" aria-hidden="true">
                                        <Icon />
                                    </span>
                                    <span className="sp-category__title">{title}</span>
                                    <span className="sp-category__description">{description}</span>
                                    <span className="sp-category__cta" aria-hidden="true">
                                        {isActive ? 'Showing FAQs' : 'View FAQs'}
                                        <ArrowRight />
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </section>

            {/* ─── FAQ ─── */}
            <section className="sp-section sp-faq" id="faq" ref={faqRef} aria-labelledby="sp-faq-title">
                <div className="sp-section__header">
                    <h2 id="sp-faq-title" className="sp-section__title">Frequently Asked Questions</h2>
                    <p className="sp-section__subtitle">Quick answers to the questions we hear most.</p>
                </div>

                {isFiltering && (
                    <div className="sp-filters" aria-live="polite">
                        <span className="sp-filters__label">
                            {resultLabel}
                            {activeCategoryTitle && <> in <strong>{activeCategoryTitle}</strong></>}
                            {query.trim() && <> for &ldquo;<strong>{query.trim()}</strong>&rdquo;</>}
                        </span>
                        <button type="button" className="sp-chip" onClick={clearFilters}>
                            Clear filters <X aria-hidden="true" />
                        </button>
                    </div>
                )}

                <div id="sp-faq-list" className="sp-faq__list">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq) => {
                            const isOpen = openIds.has(faq.id);
                            const buttonId = `${baseId}-${faq.id}-button`;
                            const panelId = `${baseId}-${faq.id}-panel`;
                            return (
                                <div key={faq.id} className={`sp-faq__item${isOpen ? ' is-open' : ''}`}>
                                    <h3 className="sp-faq__heading">
                                        <button
                                            id={buttonId}
                                            type="button"
                                            className="sp-faq__trigger"
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            onClick={() => toggleFaq(faq.id)}
                                        >
                                            <span>{faq.question}</span>
                                            <ChevronDown className="sp-faq__chevron" aria-hidden="true" />
                                        </button>
                                    </h3>
                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        className="sp-faq__panel"
                                        inert={!isOpen}
                                    >
                                        <div className="sp-faq__panel-inner">
                                            <p className="sp-faq__answer">{faq.answer ?? faq.answerText}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="sp-empty">
                            <SearchX className="sp-empty__icon" aria-hidden="true" />
                            <p className="sp-empty__title">No matching answers</p>
                            <p className="sp-empty__text">
                                Try a different search, or email us at <EmailLink />{' '}and we&apos;ll help you out.
                            </p>
                            <button type="button" className="sp-chip" onClick={clearFilters}>
                                Clear filters <X aria-hidden="true" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── Contact ─── */}
            <section className="sp-section" id="contact" aria-labelledby="sp-contact-title">
                <div className="sp-contact">
                    <span className="sp-contact__icon" aria-hidden="true">
                        <Mail />
                    </span>
                    <h2 id="sp-contact-title" className="sp-section__title">Still Need Help?</h2>
                    <p className="sp-section__subtitle">
                        We&apos;re happy to hear from you. Send us a message and our support team will help you with
                        your questions.
                    </p>
                    <a href={MAILTO} className="sp-contact__email">
                        <Mail aria-hidden="true" />
                        {SUPPORT_EMAIL}
                    </a>
                    <a href={MAILTO} className="sp-btn sp-btn--gradient">
                        Contact Support
                        <span className="sp-btn__arrow" aria-hidden="true"><ArrowRight /></span>
                    </a>
                </div>
            </section>

            {/* ─── Closing CTA ─── */}
            <section className="sp-section sp-closing" aria-labelledby="sp-closing-title">
                <h2 id="sp-closing-title" className="sp-closing__title">
                    Make Every Day Better with <span className="sp-gradient-text">Superbae</span>
                </h2>
                <p className="sp-section__subtitle">
                    Plan your day, celebrate your progress, and bring more of your life together in one place.
                </p>
                <a href="https://www.superbae.co/" className="sp-btn sp-btn--dark">
                    Explore Superbae
                    <span className="sp-btn__arrow" aria-hidden="true"><ArrowRight /></span>
                </a>
            </section>
        </main>
    );
};

export default Support;
