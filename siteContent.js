/**
 * SITE CONTENT CONFIGURATION
 * 
 * This file contains all the editable text and data for the website.
 * Update this file to change announcements, dates, links, and FAQs.
 * 
 * INSTRUCTIONS:
 * 1. To add a new item, copy an existing block (between { }) and paste it.
 * 2. Ensure each item is separated by a comma (,) except the last one.
 * 3. Dates should be in "YYYY-MM-DD" format for sorting, but you can add a display string if needed.
 */

const siteContent = {
    // ============================================
    // UPDATES & ANNOUNCEMENTS
    // ============================================
    // Automatically sorts by date (newest first)
    announcements: [
        {
            date: "2026-02-15",
            title: "Join the Interest List",
            description: "Sign up today to receive the official case brief and updates directly to your inbox.",
            link: "#join",
            linkText: "Join Now",
            type: "alert" // Options: "alert", "news", "resource"
        },
        {
            date: "2026-01-20",
            title: "Competition Announced",
            description: "Get ready for the 2026 GPJ Experience Marketing Case Competition. More details coming soon — check back for official signup + deadlines.",
            link: "",
            linkText: "",
            type: "news"
        }
    ],

    // ============================================
    // KEY DATES / TIMELINE
    // ============================================
    // displayed in order
    keyDates: [
        {
            date: "Jan 28th, 2026",
            title: "Interest Form Opens",
            status: "active" // "upcoming", "active", "completed"
        },
        {
            date: "Feb 9th, 2026",
            title: "Official Signup Opens",
            status: "upcoming"
        },
        {
            date: "Mar 9th, 2026",
            title: "Case Brief Release",
            status: "upcoming"
        },
        {
            date: "Mar 25th, 2026",
            title: "Round 1 Submission Deadline",
            status: "upcoming"
        },
        {
            date: "Mar 28th, 2026",
            title: "Round 1 Presentations",
            status: "upcoming"
        },
        {
            date: "Apr 05, 2026",
            title: "Final Round",
            status: "upcoming"
        }
    ],

    // ============================================
    // QUICK LINKS / RESOURCES
    // ============================================
    quickLinks: [
        {
            title: "Case Brief PDF",
            url: "#",
            status: "Coming Soon"
        },
        {
            title: "Slide Deck Template",
            url: "#",
            status: "Coming Soon"
        },
        {
            title: "Info Session Details",
            url: "#",
            status: "Coming Soon"
        }
    ],

    // ============================================
    // FAQ SECTION
    // ============================================
    faq: [
        {
            question: "Who can participate?",
            answer: "The competition is open to all undergraduate students. Teams must consist of 3 members."
        },
        {
            question: "Do I need marketing experience?",
            answer: "No! We look for diverse perspectives. Engineering, Design, Business, and Liberal Arts majors are all welcome."
        },
        {
            question: "Is this a virtual or in-person event?",
            answer: "The competition is in-person, and all rounds will be held in person on Saturday, March 28th, 2026."
        }
    ]
};
