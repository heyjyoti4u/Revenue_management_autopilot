/**
 * SignalStay detailed route pages — each page follows the reference site's long-form rhythm,
 * but keeps an original narrative, visual artifact, and operational point of view.
 * No reviews, ratings, or testimonials are fabricated here.
 */
import { ArrowRight, ArrowUpRight, BarChart3, BellRing, CalendarDays, Check, ChevronDown, Clock3, Command, Layers3, MessageCircle, Radar, Search, ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";

const heroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663701980008/hRdpkRiReQPCotiz.jpg";
const analyticsImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663701980008/wiQTDrbpxdRmxEfM.jpg";
const commsImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663701980008/qQEEvdqJIFYqsrHK.jpg";
const closingImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663701980008/XCpbBWuZkSxsxezY.jpg";
const markImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663701980008/gxYkkbqEWtQenAdE.png";

type RouteKey = "str" | "revenue" | "ota" | "hotel" | "hotel-revenue" | "hotel-ota" | "customers" | "resources" | "about" | "book";

type RouteData = {
  eyebrow: string;
  title: string;
  emphasis: string;
  intro: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
  theme: string;
  proof: { label: string; value: string; note: string }[];
  question: string;
  questionCopy: string;
  stepsTitle: string;
  stepsIntro: string;
  steps: { number: string; title: string; copy: string; tags: string[] }[];
  operationsTitle: string;
  operationsCopy: string;
  operationRows: { label: string; value: string; note: string }[];
  faqs: { question: string; answer: string }[];
};

const routeData: Record<RouteKey, RouteData> = {
  str: {
    eyebrow: "For short-term rental portfolios",
    title: "Run the portfolio",
    emphasis: "before it runs you.",
    intro: "SignalStay connects listing visibility, rate movement, content quality, channel mix, and booking pace into one daily operating rhythm for growing STR teams.",
    primary: "Explore the STR operating model",
    primaryHref: "/str/revenue-management",
    secondary: "Run a portfolio health check",
    secondaryHref: "/str/revenue-health-check",
    theme: "str",
    proof: [{ label: "Listings watched", value: "25k+", note: "Portfolio-level signal coverage" }, { label: "Visibility lens", value: "01", note: "One rank view across every property" }, { label: "Action cadence", value: "Daily", note: "The signal is reviewed before the calendar" }, { label: "Channel context", value: "04", note: "Major OTA operating patterns" }],
    question: "A portfolio is not a row of calendars.",
    questionCopy: "Each listing carries its own rank position, demand shape, content quality, channel mix, and owner expectation. The operation gets useful when those signals are read together—and the next action is obvious.",
    stepsTitle: "The STR revenue loop, managed end to end",
    stepsIntro: "Reference-style long-form detail, rebuilt as an operating sequence: see the signal, choose the lever, and keep the portfolio moving.",
    steps: [{ number: "01", title: "See where each listing sits", copy: "Track search position, comp-set movement, booking pace, and the lead time between a rank change and a booking change.", tags: ["Rank monitoring", "Comp set", "Pace alerts"] }, { number: "02", title: "Move the right lever", copy: "Adjust rate, length-of-stay rules, promotions, content, or channel weight according to what the signal actually says.", tags: ["Rate floors", "Gap nights", "Promotions"] }, { number: "03", title: "Keep the system aligned", copy: "Carry the decision across pricing tools, PMS context, channel managers, and the communication layer your team already uses.", tags: ["Parity", "Channel mix", "Team handoff"] }],
    operationsTitle: "What the team sees before the month closes",
    operationsCopy: "The point is not another dashboard. It is a daily operating view that makes exceptions visible while the team can still do something about them.",
    operationRows: [{ label: "Search rank", value: "#04 → #02", note: "Visibility recovered after content and availability change" }, { label: "Booking pace", value: "+18d", note: "Lead time between signal movement and calendar impact" }, { label: "Channel mix", value: "51 / 21 / 16 / 12", note: "Illustrative OTA contribution view" }, { label: "Next action", value: "03 fixes", note: "Assigned to content, rate, and minimum-stay rules" }],
    faqs: [{ question: "Does SignalStay replace our pricing tool?", answer: "No. SignalStay works around the pricing tool you already use and directs the surrounding decisions: rank, content, channel mix, promotions, parity, and operating cadence." }, { question: "How does the daily review work?", answer: "The operation starts with movement: a rank change, pace anomaly, channel break, or content gap. The team then assigns the smallest useful action and tracks the direction it creates." }, { question: "What kind of portfolio is a fit?", answer: "The model is designed for multi-property STR operators who need consistent setup, clear ownership, and a portfolio-level view without losing listing-level detail." }],
  },
  revenue: {
    eyebrow: "STR operations / revenue management",
    title: "Pricing is only useful",
    emphasis: "when rank agrees.",
    intro: "Dynamic pricing can move the rate. SignalStay manages the conditions that decide whether a guest sees it, trusts it, and books it.",
    primary: "Book a rate strategy review",
    primaryHref: "/book-a-call-with-our-experts",
    secondary: "See OTA optimization",
    secondaryHref: "/str/ota-optimization",
    theme: "revenue",
    proof: [{ label: "Rate signals", value: "06", note: "Demand, pace, rank, restrictions, events, and mix" }, { label: "Window", value: "28d", note: "A useful operating view of momentum" }, { label: "Guardrails", value: "03", note: "Floor, ceiling, and confidence checks" }, { label: "Decision", value: "01", note: "One prioritized move per review" }],
    question: "A rate is a decision, not a strategy.",
    questionCopy: "Occupancy can rise while pricing power quietly falls. The useful rate decision respects where the listing sits, what the channel is rewarding, and how much time the team has before demand changes shape.",
    stepsTitle: "Rate strategy, with the context around it",
    stepsIntro: "A detailed revenue page needs more than a promise about automation. It needs to show the decisions that happen around the rate.",
    steps: [{ number: "01", title: "Read the booking window", copy: "Compare pace, demand, event pressure, and comp-set movement before changing the rate or restriction set.", tags: ["Pace", "Demand", "Events"] }, { number: "02", title: "Protect the opportunity", copy: "Use floors, ceilings, gap-night logic, and stay rules to avoid trading away yield for an easy occupancy story.", tags: ["Min stay", "Gap night", "Rate guardrails"] }, { number: "03", title: "Direct the tool", copy: "Keep the system doing the repeatable work while the operating layer tunes the inputs it cannot see.", tags: ["Pricing tool", "Strategy", "Review"] }],
    operationsTitle: "A rate view that behaves like a revenue desk",
    operationsCopy: "The interface below is illustrative: a compact read of the moments where a rate decision should be connected to rank and pace.",
    operationRows: [{ label: "Tonight", value: "$189", note: "Rate held: rank stable, pace above market" }, { label: "Weekend", value: "$267", note: "Peak window: demand and event pressure rising" }, { label: "Gap night", value: "$152", note: "Single-night gap protected with targeted rule" }, { label: "Decision", value: "Hold", note: "No discount while visibility is recovering" }],
    faqs: [{ question: "Can this work with PriceLabs or another dynamic-pricing system?", answer: "Yes. SignalStay is designed as the context and execution layer around a pricing engine, not as a forced replacement for it." }, { question: "Do you automatically lower rates when demand softens?", answer: "Not by default. The point is to understand whether the issue is rate, visibility, content, channel, or availability before applying a discount." }, { question: "What does a strategy review include?", answer: "The review looks at a sample of listing positions, rate rules, booking pace, channel context, and the operational decisions currently being made around them." }],
  },
  ota: {
    eyebrow: "STR operations / OTA optimization",
    title: "Earn more from",
    emphasis: "every channel.",
    intro: "Airbnb, Booking.com, Vrbo, and Expedia each reward different behavior. SignalStay builds the playbook for each channel and keeps it moving.",
    primary: "Book a channel review",
    primaryHref: "/book-a-call-with-our-experts",
    secondary: "See ranking intelligence",
    secondaryHref: "/str/ranking-intelligence",
    theme: "ota",
    proof: [{ label: "Active channels", value: "04", note: "Each with its own ranking context" }, { label: "Channel lens", value: "1:1", note: "One playbook per OTA" }, { label: "Mix review", value: "Daily", note: "Contribution and parity checked together" }, { label: "Signal", value: "↑ 12", note: "Illustrative visibility movement" }],
    question: "Being listed everywhere is not the same as being visible everywhere.",
    questionCopy: "A channel mix earns its keep when each platform gets the content, promotion, response, parity, and availability signals it expects. The answer is not to push one channel harder; it is to operate each one on its own terms.",
    stepsTitle: "The channel operation behind the listing",
    stepsIntro: "A channel-led page needs a channel-led artifact: contribution, placement, and the reason a platform deserves more or less weight.",
    steps: [{ number: "01", title: "Map the channel mix", copy: "See how Airbnb, Booking.com, Vrbo, and Expedia contribute—not only in revenue, but in visibility and booking quality.", tags: ["Contribution", "Parity", "Placement"] }, { number: "02", title: "Tune the platform levers", copy: "Manage content, promotions, response signals, availability, and channel-specific ranking inputs instead of using one default setup.", tags: ["Content", "Promotions", "Algorithm"] }, { number: "03", title: "Rebalance with intent", copy: "Weight the right channel for the market moment, protecting rate confidence while the mix changes.", tags: ["Channel weight", "Yield", "Review"] }],
    operationsTitle: "Channel mix / after the operating change",
    operationsCopy: "The numbers below are a visual model of the decision surface—not customer results or a performance guarantee.",
    operationRows: [{ label: "Airbnb", value: "51%", note: "Content and new-listing signals active" }, { label: "Booking.com", value: "21%", note: "Genius and conversion context reviewed" }, { label: "Vrbo", value: "16%", note: "Premier-host and response signals watched" }, { label: "Expedia", value: "12%", note: "Placement and promotion weight checked" }],
    faqs: [{ question: "Do you manage one OTA better than the others?", answer: "The operating model is channel-specific rather than channel-exclusive. The goal is to understand what each platform rewards and decide where the portfolio should place its attention." }, { question: "Can you work with our current channel manager?", answer: "Yes. SignalStay works on top of the existing stack, using channel-manager and PMS context to make the daily channel decision clearer." }, { question: "What happens in a channel review?", answer: "We inspect channel mix, listing setup, visibility signals, promotions, parity, and the gap between the channel you sell on and the channel guests actually see." }],
  },
  hotel: {
    eyebrow: "For independent hotels",
    title: "Run the revenue desk",
    emphasis: "with more signal.",
    intro: "Bring pricing, OTA visibility, distribution, and commercial context into one operating layer—without replacing the tools your team already trusts.",
    primary: "Explore hotel operations",
    primaryHref: "/hotel/revenue-management",
    secondary: "Review hotel OTA ranking",
    secondaryHref: "/hotel/ota-optimization",
    theme: "hotel",
    proof: [{ label: "Operating layers", value: "03", note: "Visibility, pricing, and distribution" }, { label: "Desk view", value: "01", note: "One commercial read for the team" }, { label: "Handoffs", value: "Less", note: "Context travels with the decision" }, { label: "Stack", value: "ON TOP", note: "Works with the tools you have" }],
    question: "Your stack should work harder together.",
    questionCopy: "The hotel revenue desk already has a forecast, a PMS, a channel manager, a pricing workflow, and a commercial meeting. SignalStay gives those inputs a shared operating language so the next call is easier to make.",
    stepsTitle: "The hotel revenue desk, made more legible",
    stepsIntro: "A hotel page should feel like the commercial team: clear handoffs, market context, rate confidence, and a visible next action.",
    steps: [{ number: "01", title: "Read the market pulse", copy: "Bring comp-set, demand, events, pickup, and channel context into the same view before the rate meeting starts.", tags: ["Pickup", "Market", "Comp set"] }, { number: "02", title: "Align the rate story", copy: "Connect rate plans, restrictions, offers, and direct/OTA positioning to the commercial objective for the week.", tags: ["Rate plan", "Offer", "Direct"] }, { number: "03", title: "Give the team the handoff", copy: "Make the decision understandable to revenue, sales, operations, and ownership without asking everyone to open another tool.", tags: ["Handoff", "Owners", "Action"] }],
    operationsTitle: "A commercial desk view, not another isolated report",
    operationsCopy: "SignalStay makes the context behind a rate decision visible to the people who have to execute it.",
    operationRows: [{ label: "Demand", value: "+14%", note: "Pickup above the same booking window" }, { label: "Placement", value: "#03", note: "OTA visibility holding in the comp set" }, { label: "Rate plan", value: "BAR 3", note: "Offer structure aligned to the window" }, { label: "Owner note", value: "Ready", note: "One-line explanation for the weekly review" }],
    faqs: [{ question: "Is this only for independent hotels?", answer: "The page is written for independent and boutique hotel teams, but the operating principles also apply to small hotel groups that need more consistency across properties." }, { question: "Do we need to replace our RMS?", answer: "No. The goal is to connect the context around the RMS and make the daily commercial decision more legible." }, { question: "Who uses the output?", answer: "Revenue, commercial, operations, distribution, and ownership teams can each see the part of the decision that matters to them." }],
  },
  "hotel-revenue": {
    eyebrow: "Hotel operations / revenue management",
    title: "Make demand visible",
    emphasis: "to the whole team.",
    intro: "A modern hotel revenue desk needs more than a forecast. It needs a daily operating view that connects demand, placement, rate, and commercial intent.",
    primary: "Talk to a hotel revenue expert",
    primaryHref: "/book-a-call-with-our-experts",
    secondary: "See hotel OTA ranking",
    secondaryHref: "/hotel/ota-optimization",
    theme: "hotel-revenue",
    proof: [{ label: "Desk inputs", value: "06", note: "Pickup, pace, rate, placement, offers, events" }, { label: "Review cadence", value: "Daily", note: "Commercial signals before the meeting" }, { label: "Handoffs", value: "03", note: "Revenue, commercial, and operations" }, { label: "Stack", value: "ON TOP", note: "No replacement project required" }],
    question: "The best decision is already in the stack.",
    questionCopy: "SignalStay interprets the market, placement, rate, and booking signals your team already owns. The value is the operating context between systems—the part that usually disappears in a spreadsheet handoff.",
    stepsTitle: "A revenue desk that leaves a decision trail",
    stepsIntro: "The best hotel operating page should make the weekly revenue conversation more precise and the daily handoff less fragile.",
    steps: [{ number: "01", title: "Start with pickup", copy: "See where the booking window is moving and whether the pace is supported by market demand or just a temporary spike.", tags: ["Pickup", "Pace", "Demand"] }, { number: "02", title: "Pressure-test the rate", copy: "Compare rate-plan position, restrictions, offers, and OTA placement before calling for a change.", tags: ["BAR", "Restrictions", "Placement"] }, { number: "03", title: "Share the why", copy: "Give commercial and operations teams a concise explanation of what changed and what they should watch next.", tags: ["Reason", "Owner", "Next watch"] }],
    operationsTitle: "Inside the hotel desk",
    operationsCopy: "A compact operational surface for the moments between the forecast and the decision.",
    operationRows: [{ label: "Pickup", value: "+22 rooms", note: "Last 7 days, compared with the prior window" }, { label: "BAR", value: "$189", note: "Held while placement improved" }, { label: "Offer", value: "Mobile", note: "Incremental test, not a default discount" }, { label: "Next review", value: "Tue 09:00", note: "Commercial handoff already prepared" }],
    faqs: [{ question: "Can a revenue manager keep their existing meeting cadence?", answer: "Yes. SignalStay is designed to make the existing cadence sharper, with an operating read prepared before the meeting rather than another meeting to attend." }, { question: "Does this include hotel distribution?", answer: "Yes. Rate, offer, placement, channel mix, and the commercial context around distribution are treated as one connected operating layer." }, { question: "What is the first step?", answer: "Start with a working review of the property mix, current tools, and the signal your team wants to interpret faster." }],
  },
  "hotel-ota": {
    eyebrow: "Hotel operations / OTA ranking",
    title: "Win the search",
    emphasis: "before the click.",
    intro: "Hotel visibility is shaped by more than price. SignalStay manages the content, channel, promotion, and conversion signals that decide who gets considered first.",
    primary: "Review your hotel OTA mix",
    primaryHref: "/book-a-call-with-our-experts",
    secondary: "See hotel revenue management",
    secondaryHref: "/hotel/revenue-management",
    theme: "hotel-ota",
    proof: [{ label: "Search layers", value: "05", note: "Content, offer, price, review, response" }, { label: "Channel view", value: "1:1", note: "Placement context by OTA" }, { label: "Review cadence", value: "Daily", note: "Conversion and visibility together" }, { label: "Next action", value: "01", note: "A clear commercial owner" }],
    question: "Distribution is a commercial decision.",
    questionCopy: "A hotel can be present on every channel and still be absent from the guest's shortlist. SignalStay coordinates content, offer structure, channel weight, and rate positioning around the property goal.",
    stepsTitle: "From channel presence to channel performance",
    stepsIntro: "A channel decision is not just a marketing decision; it changes yield, positioning, and the work the commercial team has to do next.",
    steps: [{ number: "01", title: "Read the placement", copy: "Understand where the property appears, what the guest sees first, and which conversion input is underperforming.", tags: ["Placement", "Click", "Conversion"] }, { number: "02", title: "Tune the offer", copy: "Align content, rate plan, promotion, availability, and parity to the reason the property wants the booking.", tags: ["Offer", "Parity", "Availability"] }, { number: "03", title: "Protect the mix", copy: "Give direct, brand, and OTA channels a deliberate role instead of allowing the loudest channel to set the strategy.", tags: ["Direct", "OTA", "Yield"] }],
    operationsTitle: "The hotel channel map",
    operationsCopy: "A visual model of the placement and conversion questions a commercial team can answer before changing the offer.",
    operationRows: [{ label: "Direct", value: "Owned", note: "Brand demand protected with clear value" }, { label: "Airbnb", value: "Content", note: "Property story and amenity structure reviewed" }, { label: "Booking.com", value: "Offer", note: "Genius and mobile context checked" }, { label: "Expedia", value: "Mix", note: "Placement role understood before weighting" }],
    faqs: [{ question: "Does OTA ranking optimization mean chasing discounts?", answer: "No. The focus is on the complete visibility and conversion signal, so price is considered in context rather than used as the only lever." }, { question: "Can you support a direct-booking strategy too?", answer: "Yes. Channel mix is treated as a commercial choice, so direct demand and OTA visibility are considered together." }, { question: "How do you report the change?", answer: "The output is a clear view of what moved, what was adjusted, and which channel or property owner should watch the next signal." }],
  },
  customers: {
    eyebrow: "Customer signals",
    title: "Results start",
    emphasis: "with a better read.",
    intro: "Every portfolio begins from a different position. The repeatable pattern is simple: understand the signal, act on the right lever, and keep the operation moving.",
    primary: "Talk through your starting point",
    primaryHref: "/book-a-call-with-our-experts",
    secondary: "View the portfolio signal",
    secondaryHref: "/case-studies/portfolio-signals",
    theme: "customers",
    proof: [{ label: "Outcome lens", value: "01", note: "Read the direction before the projection" }, { label: "Decision trail", value: "Clear", note: "Every action has a reason attached" }, { label: "Evidence", value: "Visible", note: "Illustrative models are labelled as such" }, { label: "Focus", value: "Signal", note: "What changed before what it produced" }],
    question: "No performance theatre. Just the operating pattern.",
    questionCopy: "The useful customer story is not a decorative testimonial. It is the signal trail: where visibility shifted, how the team responded, and what changed next. That is the story an operator can actually use.",
    stepsTitle: "A customer view built around decisions",
    stepsIntro: "Use the same lens across a portfolio, a market, or a single property without hiding the context that makes the result meaningful.",
    steps: [{ number: "01", title: "Name the starting point", copy: "Record the market, property shape, channel mix, and operating question before evaluating the direction of travel.", tags: ["Context", "Baseline", "Question"] }, { number: "02", title: "Show the move", copy: "Make the action trail visible: what was changed, why it was chosen, and what signal should confirm or challenge it.", tags: ["Action", "Owner", "Watch"] }, { number: "03", title: "Keep the claim honest", copy: "Separate operating evidence from marketing language so the next team can trust what it is reading.", tags: ["Evidence", "Context", "Clarity"] }],
    operationsTitle: "The portfolio signal trail",
    operationsCopy: "This is a discussion surface for a customer conversation—not a fabricated testimonial or guaranteed outcome.",
    operationRows: [{ label: "Week 01", value: "#09", note: "Visibility baseline recorded" }, { label: "Week 02", value: "#05", note: "Content and availability actions applied" }, { label: "Week 03", value: "#04", note: "Rate held while placement recovered" }, { label: "Week 04", value: "Review", note: "Next action decided with the operator" }],
    faqs: [{ question: "Where do the customer examples come from?", answer: "This page uses clearly labelled illustrative operating models. Real customer stories can be added later once SignalStay has approved source material and permission to publish it." }, { question: "What counts as a useful result?", answer: "The direction and the decision trail matter: stronger visibility, clearer pace, more confident rate strategy, and a team that can act earlier." }, { question: "Can we review our own signal trail?", answer: "Yes. A first conversation can map the current baseline, the question behind it, and the next useful operating window." }],
  },
  resources: {
    eyebrow: "Signal library",
    title: "Useful thinking for",
    emphasis: "busy operators.",
    intro: "Short notes, practical playbooks, and plain-English explanations for the decisions that sit between a rate and a reservation.",
    primary: "Browse the guide topics",
    primaryHref: "/resources/guides",
    secondary: "Talk to an operator",
    secondaryHref: "/book-a-call-with-our-experts",
    theme: "resources",
    proof: [{ label: "Formats", value: "03", note: "Notes, guides, and live sessions" }, { label: "Read time", value: "08m", note: "Short enough for the next meeting" }, { label: "Point of view", value: "Direct", note: "Useful language over jargon" }, { label: "Output", value: "01", note: "One next action per topic" }],
    question: "A resource should change the next conversation.",
    questionCopy: "The library stays close to the work: rank, channel, pricing, distribution, and the context your team needs to make a better call when the market moves.",
    stepsTitle: "A library organized around the questions",
    stepsIntro: "Instead of a generic content grid, each resource starts with a question an operator can bring to the next revenue review.",
    steps: [{ number: "01", title: "What moved?", copy: "Read the signals that usually change before the calendar: rank, pace, placement, channel contribution, and alert volume.", tags: ["Rank", "Pace", "Alerts"] }, { number: "02", title: "What does it affect?", copy: "Connect a movement to rate strategy, content, distribution, guest conversion, or the team's operating cadence.", tags: ["Context", "Impact", "Levers"] }, { number: "03", title: "What do we do next?", copy: "Turn the note into a small action the team can own, review, and explain without another layer of process.", tags: ["Action", "Owner", "Review"] }],
    operationsTitle: "The signal library, in working order",
    operationsCopy: "A structured editorial surface for operators who need the idea and the next action in the same place.",
    operationRows: [{ label: "Journal", value: "06 notes", note: "Short operator questions and observations" }, { label: "Guides", value: "04 paths", note: "Step-by-step operating frameworks" }, { label: "Webinars", value: "LIVE", note: "Conversations built around trade-offs" }, { label: "Glossary", value: "A–Z", note: "Plain-English revenue language" }],
    faqs: [{ question: "Are the resources product documentation?", answer: "Not only. They are practical operating notes designed to help revenue, distribution, and commercial teams share the same language." }, { question: "Can our team use these in owner meetings?", answer: "Yes. The structure is intentionally concise: context, signal, trade-off, and the next question to ask." }, { question: "Can you create a guide for our market?", answer: "That is a useful next step for a future content pass: turn the generic operating lens into a market- or portfolio-specific playbook." }],
  },
  about: {
    eyebrow: "About SignalStay",
    title: "A clearer operating layer",
    emphasis: "for hospitality revenue.",
    intro: "SignalStay exists for teams who know that a calendar is an outcome. The useful work starts earlier, in the signals that shape who gets seen and what guests choose.",
    primary: "Meet the operating model",
    primaryHref: "/str",
    secondary: "Talk to the team",
    secondaryHref: "/contact",
    theme: "about",
    proof: [{ label: "Our stance", value: "EARLY", note: "Read the signal before it becomes a problem" }, { label: "Language", value: "Clear", note: "Direct enough for operators" }, { label: "Systems", value: "Useful", note: "No dashboard without a decision" }, { label: "Context", value: "Human", note: "The team still owns the call" }],
    question: "Precise does not have to feel cold.",
    questionCopy: "We combine analytical discipline with the calm, direct communication hospitality teams need when the market moves faster than the meeting calendar.",
    stepsTitle: "The principles behind the product",
    stepsIntro: "An about page should describe the operating beliefs that shape the work, not just list a mission statement.",
    steps: [{ number: "01", title: "Make the signal legible", copy: "If a team cannot see what moved, it cannot own the next decision. Every surface starts with the signal and its context.", tags: ["See", "Context", "Explain"] }, { number: "02", title: "Keep ownership visible", copy: "Good operations do not hide behind automation. They make the owner, action, and review window obvious.", tags: ["Owner", "Action", "Cadence"] }, { number: "03", title: "Build around the work", copy: "The best system fits the team's current stack and communication habits before asking anyone to adopt another layer.", tags: ["Stack", "Human", "Adoption"] }],
    operationsTitle: "The SignalStay point of view",
    operationsCopy: "The strongest operating systems are calm under pressure because they make the next decision easier to find.",
    operationRows: [{ label: "Start", value: "Signal", note: "Begin with what changed" }, { label: "Decide", value: "Owner", note: "Make responsibility visible" }, { label: "Act", value: "Small", note: "Prefer the smallest useful intervention" }, { label: "Learn", value: "Repeat", note: "Turn the result into operating memory" }],
    faqs: [{ question: "Why hospitality revenue?", answer: "Because ranking, pricing, distribution, and guest choice are tightly connected—and many teams still have to manage those connections manually across separate tools." }, { question: "Is SignalStay software or a service?", answer: "The operating model is the important part: a connected revenue layer that can combine software surfaces, team workflows, and expert execution where it creates the most value." }, { question: "What makes the approach different?", answer: "The starting point is the signal before the booking, not a static calendar after the fact." }],
  },
  book: {
    eyebrow: "Free signal review",
    title: "See what is moving",
    emphasis: "before the calendar.",
    intro: "Share a few details and we will use the first conversation to map the signals behind your current revenue operation.",
    primary: "Start the review request",
    primaryHref: "#review-form",
    secondary: "Explore the STR model",
    secondaryHref: "/str",
    theme: "book",
    proof: [{ label: "Format", value: "30m", note: "A direct working conversation" }, { label: "Commitment", value: "NONE", note: "Clarity before a commercial decision" }, { label: "Inputs", value: "03", note: "Portfolio, tools, and current signal" }, { label: "Output", value: "01", note: "A prioritized next question" }],
    question: "The first output is clarity.",
    questionCopy: "The first conversation is not a product tour. It is a practical read on your current channel mix, pricing setup, portfolio shape, and the signal that prompted you to reach out.",
    stepsTitle: "What happens in a signal review",
    stepsIntro: "A useful consultation has a shape. It starts with context, moves through the current operating surface, and ends with a question your team can use.",
    steps: [{ number: "01", title: "Bring the context", copy: "Share your portfolio shape, market, booking channels, tools, and the problem your team is currently watching.", tags: ["Portfolio", "Market", "Stack"] }, { number: "02", title: "Map the signal", copy: "We connect the question to rank, pace, rate, content, distribution, and the operating decisions around them.", tags: ["Signal", "Levers", "Context"] }, { number: "03", title: "Leave with a next move", copy: "The output is a clear next question and a view of whether a deeper operating review would be useful.", tags: ["Next move", "Owner", "No pressure"] }],
    operationsTitle: "The review brief",
    operationsCopy: "A concise brief keeps the first conversation focused on the operation rather than on a generic product pitch.",
    operationRows: [{ label: "Portfolio", value: "Context", note: "Property count, markets, and operating model" }, { label: "Current stack", value: "Inputs", note: "Pricing, PMS, channel, and communication tools" }, { label: "Signal", value: "Question", note: "The movement your team wants to understand" }, { label: "Next", value: "Action", note: "The smallest useful follow-up" }],
    faqs: [{ question: "Is the review really free?", answer: "Yes. The first conversation is intended to understand the operating context before any commercial decision is made." }, { question: "What should I prepare?", answer: "A rough portfolio size, the markets you operate in, the tools you use, and the signal or question that brought you here is enough." }, { question: "Do you work with hotels as well as STRs?", answer: "Yes. Use the form to choose a short-term rental, independent hotel, or mixed portfolio so the first conversation starts in the right context." }],
  },
};

function PageArtifact({ route }: { route: RouteKey }) {
  const data = routeData[route];
  if (route === "ota" || route === "hotel-ota") return <div className="detail-artifact artifact-channel"><div className="artifact-top"><span><i />Channel mix</span><b>After</b></div>{["Airbnb", "Booking.com", "Vrbo", "Expedia"].map((channel, index) => <div className="channel-bar" key={channel}><span><i className={`channel-dot channel-dot--${index + 1}`} />{channel}</span><div><span style={{ width: `${[51, 21, 16, 12][index]}%` }} /></div><strong>{[51, 21, 16, 12][index]}%</strong></div>)}<div className="artifact-total"><span>SignalStay mix view</span><strong>↑ 12 positions</strong></div></div>;
  if (route === "revenue" || route === "str") return <div className="detail-artifact artifact-rate"><div className="artifact-top"><span><i />Rate window</span><b>June 2026</b></div><div className="rate-head"><span>Market</span><strong>Nashville / this weekend</strong><em>#04 rank</em></div><div className="rate-calendar">{[148, 152, 179, 189, 241, 267, 259, 155, 161, 182, 194, 248, 271, 263, 149, 153, 176, 188, 244, 269, 255].map((rate, index) => <div key={`${rate}-${index}`} className={index === 5 || index === 12 ? "rate-cell rate-cell--active" : "rate-cell"}><small>{(index % 7) + 1}</small><strong>${rate}</strong></div>)}</div><div className="artifact-total"><span>Next rate review</span><strong>Hold / rank recovering</strong></div></div>;
  if (route === "hotel" || route === "hotel-revenue") return <div className="detail-artifact artifact-desk"><div className="artifact-top"><span><i />Commercial desk</span><b>09:00 review</b></div><div className="desk-summary"><div><span>Pickup</span><strong>+22</strong><small>rooms / 7d</small></div><div><span>BAR</span><strong>$189</strong><small>held today</small></div><div><span>Placement</span><strong>#03</strong><small>comp set</small></div></div><div className="desk-list">{["Demand pulse / above pace", "Offer structure / mobile test", "Owner note / ready to share"].map((item, index) => <div key={item}><i className={`desk-signal desk-signal--${index + 1}`} /><span>{item}</span><ArrowRight size={14} /></div>)}</div><div className="artifact-total"><span>One commercial read</span><strong>Ready for handoff</strong></div></div>;
  if (route === "book") return <div className="detail-artifact artifact-review"><div className="artifact-top"><span><i />Review brief</span><b>Draft</b></div><div className="review-row"><span>01</span><div><strong>Portfolio context</strong><small>market / property mix / operating model</small></div><Check size={15} /></div><div className="review-row"><span>02</span><div><strong>Current stack</strong><small>pricing / PMS / channel / comms</small></div><Check size={15} /></div><div className="review-row"><span>03</span><div><strong>Signal under review</strong><small>rank / pace / rate / distribution</small></div><Radar size={15} /></div><div className="review-footer"><span>Next conversation</span><strong>Clearer first question</strong></div></div>;
  if (route === "resources") return <div className="detail-artifact artifact-library"><div className="artifact-top"><span><i />Signal library</span><b>Read / apply</b></div>{["Rank before bookings", "The practical rate review", "Channel mix, in plain English", "The weekly operating rhythm"].map((item, index) => <div className="library-row" key={item}><span>0{index + 1}</span><div><strong>{item}</strong><small>{["08 min read", "06 min read", "10 min read", "12 min read"][index]}</small></div><ArrowUpRight size={14} /></div>)}</div>;
  if (route === "customers") return <div className="detail-artifact artifact-timeline"><div className="artifact-top"><span><i />Portfolio signal trail</span><b>28 days</b></div>{["Baseline recorded", "Rank movement detected", "Content and stay rules adjusted", "Next review prepared"].map((item, index) => <div className="timeline-row" key={item}><span>0{index + 1}</span><div><strong>{item}</strong><small>{["Week 01 / position #09", "Week 02 / position #05", "Week 03 / position #04", "Week 04 / operator handoff"][index]}</small></div><i className={index === 3 ? "timeline-dot timeline-dot--active" : "timeline-dot"} /></div>)}</div>;
  return <div className="detail-artifact artifact-principles"><div className="artifact-top"><span><i />Operating layer</span><b>SignalStay</b></div><div className="principle-circle"><img src={markImage} alt="" /><span>see</span><strong>decide</strong><em>act</em></div><div className="artifact-total"><span>Signal before outcome</span><strong>One clear next move</strong></div></div>;
}

type RevenueMetric = "revpar" | "occupancy" | "adr";
type RevenueRange = 7 | 14 | 28;

const revenueSeries: Record<RevenueMetric, number[]> = {
  revpar: [142, 148, 146, 153, 159, 162, 158, 164, 171, 168, 175, 181, 178, 184, 191, 188, 196, 201, 198, 205, 211, 208, 216, 220, 218, 224, 231, 229],
  occupancy: [58, 61, 60, 63, 66, 68, 65, 69, 71, 70, 73, 75, 74, 77, 79, 78, 81, 82, 80, 83, 85, 84, 87, 88, 86, 89, 91, 90],
  adr: [184, 188, 186, 192, 198, 201, 197, 205, 211, 208, 216, 221, 219, 226, 232, 229, 237, 242, 239, 246, 251, 248, 256, 261, 258, 265, 271, 268],
};

const revenueMetricMeta: Record<RevenueMetric, { label: string; unit: string; color: string; note: string }> = {
  revpar: { label: "RevPAR", unit: "$", color: "#8b5cf6", note: "revenue per available room" },
  occupancy: { label: "Occupancy", unit: "%", color: "#c58b5a", note: "held nights across the window" },
  adr: { label: "ADR", unit: "$", color: "#70bb9b", note: "average daily rate" },
};

function RevenueAutopilotDashboard({ hotel = false }: { hotel?: boolean }) {
  const [metric, setMetric] = useState<RevenueMetric>(hotel ? "occupancy" : "revpar");
  const [range, setRange] = useState<RevenueRange>(14);
  const meta = revenueMetricMeta[metric];
  const points = revenueSeries[metric].slice(0, range);
  const min = Math.min(...points);
  const max = Math.max(...points);
  const width = 760;
  const height = 260;
  const padding = { top: 28, right: 24, bottom: 34, left: 42 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const toX = (index: number) => padding.left + (index / Math.max(points.length - 1, 1)) * plotWidth;
  const toY = (value: number) => padding.top + (1 - (value - min) / Math.max(max - min, 1)) * plotHeight;
  const linePath = points.map((value, index) => `${index === 0 ? "M" : "L"} ${toX(index).toFixed(1)} ${toY(value).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${toX(points.length - 1).toFixed(1)} ${height - padding.bottom} L ${toX(0).toFixed(1)} ${height - padding.bottom} Z`;
  const delta = points[points.length - 1] - points[0];
  const deltaPercent = Math.round((delta / points[0]) * 100);
  const labelEvery = range === 7 ? 1 : range === 14 ? 2 : 4;

  return <section className="autopilot-dashboard-section"><div className="content-frame"><div className="autopilot-heading"><div><p className="eyebrow eyebrow--violet"><span className="eyebrow-pulse" />Revenue Management Autopilot</p><h2>{hotel ? <>The hotel desk, <em>in motion.</em></> : <>See the next rate move <em>before the window closes.</em></>}</h2><p className="section-lede">A dynamic operating view that lets the team switch between the metric, horizon, and decision context without opening another report.</p></div><div className="autopilot-status"><span><i />Illustrative live model</span><strong>Updated 09:00</strong></div></div><div className="autopilot-shell"><div className="autopilot-toolbar"><div className="dashboard-tabs" role="group" aria-label="Revenue metric"><span className="toolbar-label">View</span>{(Object.keys(revenueMetricMeta) as RevenueMetric[]).map((key) => <button key={key} className={metric === key ? "dashboard-tab dashboard-tab--active" : "dashboard-tab"} onClick={() => setMetric(key)} aria-pressed={metric === key}>{revenueMetricMeta[key].label}</button>)}</div><div className="dashboard-tabs" role="group" aria-label="Chart range"><span className="toolbar-label">Window</span>{([7, 14, 28] as RevenueRange[]).map((value) => <button key={value} className={range === value ? "dashboard-tab dashboard-tab--active" : "dashboard-tab"} onClick={() => setRange(value)} aria-pressed={range === value}>{value}d</button>)}</div></div><div className="autopilot-summary"><div><span>Current {meta.label}</span><strong>{meta.unit}{points[points.length - 1]}</strong><small>{meta.note}</small></div><div><span>Window change</span><strong className={delta >= 0 ? "summary-positive" : "summary-negative"}>{delta >= 0 ? "+" : ""}{deltaPercent}%</strong><small>vs. first day in view</small></div><div><span>Recommended posture</span><strong>Protect</strong><small>rank stable / pace building</small></div><div><span>Next review</span><strong>09:00</strong><small>owner-ready handoff</small></div></div><div className="autopilot-chart-wrap"><div className="chart-axis-labels"><span>{meta.unit}{max}</span><span>{meta.unit}{Math.round((max + min) / 2)}</span><span>{meta.unit}{min}</span></div><svg className="autopilot-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${meta.label} trend over ${range} days`}><defs><linearGradient id={`chart-fill-${metric}`} x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor={meta.color} stopOpacity=".3" /><stop offset="100%" stopColor={meta.color} stopOpacity="0" /></linearGradient></defs>{[0, 1, 2, 3].map((line) => { const y = padding.top + (plotHeight / 3) * line; return <line key={line} x1={padding.left} x2={width - padding.right} y1={y} y2={y} className="chart-grid-line" />; })}<path d={areaPath} fill={`url(#chart-fill-${metric})`} /><path d={linePath} fill="none" stroke={meta.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />{points.map((value, index) => index % labelEvery === 0 || index === points.length - 1 ? <g key={`${value}-${index}`}><circle cx={toX(index)} cy={toY(value)} r="4.5" fill={meta.color} stroke="#101633" strokeWidth="3" /><text x={toX(index)} y={height - 10} textAnchor="middle" className="chart-x-label">D{index + 1}</text></g> : null)}</svg></div><div className="autopilot-insights"><div><span className="insight-dot insight-dot--violet" /><p><strong>Signal</strong> {meta.label} is moving with the booking window, not against it.</p></div><div><span className="insight-dot insight-dot--copper" /><p><strong>Guardrail</strong> Hold the floor while visibility is recovering.</p></div><div><span className="insight-dot insight-dot--green" /><p><strong>Action</strong> Review the next two peak nights before editing restrictions.</p></div></div></div><div className="autopilot-detail-grid"><article><span>01 / Diagnose</span><h3>Context before automation</h3><p>Autopilot reads pace, placement, channel mix, and the calendar window before suggesting a rate change.</p></article><article><span>02 / Decide</span><h3>One move, clearly owned</h3><p>Every recommendation carries a reason, a review time, and the operator responsible for the next call.</p></article><article><span>03 / Learn</span><h3>Keep the trail visible</h3><p>After the move, the same view shows whether rank and booking pace agreed with the decision.</p></article></div></div></section>;
}

function DetailFaq({ faqs }: { faqs: RouteData["faqs"] }) {
  const [open, setOpen] = useState(0);
  return <div className="detail-faqs">{faqs.map((faq, index) => <div className={`faq-item ${open === index ? "faq-item--open" : ""}`} key={faq.question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{faq.question}</span><ChevronDown size={17} /></button>{open === index && <p>{faq.answer}</p>}</div>)}</div>;
}

function DetailForm() {
  return <form id="review-form" className="detail-form" onSubmit={(event) => { event.preventDefault(); window.alert("Thanks — your SignalStay review request is ready for the team."); }}><p className="eyebrow eyebrow--violet">Request the review</p><h2>Start with the question.</h2><label>Name<input required placeholder="Your name" /></label><label>Business email<input required type="email" placeholder="name@company.com" /></label><label>Portfolio type<select defaultValue="str"><option value="str">Short-term rental portfolio</option><option value="hotel">Independent hotel</option><option value="mixed">Mixed portfolio</option></select></label><label>What are you watching?<textarea placeholder="Rank drop, rate question, channel mix issue…" /></label><button className="button button--violet" type="submit">Submit review request <ArrowUpRight size={16} /></button></form>;
}

export default function DetailedPage({ route }: { route: RouteKey }) {
  const data = routeData[route];
  const image = route === "ota" || route === "hotel-ota" ? analyticsImage : route === "resources" ? commsImage : route === "book" ? closingImage : heroImage;
  return <div className={`signalstay-site detailed-page detailed-page--${data.theme}`}><SiteHeader /><main>
    <section className="detailed-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,13,34,.98) 15%, rgba(8,13,34,.87) 48%, rgba(8,13,34,.54) 100%), url(${image})` }}><div className="detailed-hero-grid" /><div className="content-frame detailed-hero-inner"><div className="detailed-hero-copy"><p className="eyebrow eyebrow--violet"><span className="eyebrow-pulse" />{data.eyebrow}</p><h1>{data.title}<br /><em>{data.emphasis}</em></h1><p>{data.intro}</p><div className="hero-actions"><Link className="button button--violet" href={data.primaryHref}>{data.primary} <ArrowUpRight size={16} /></Link><Link className="button button--ghost-light" href={data.secondaryHref}>{data.secondary} <ArrowRight size={16} /></Link></div><span className="detailed-hero-foot"><i />SignalStay / {data.theme} / daily operating view</span></div><PageArtifact route={route} /></div></section>
    <section className="detail-proof"><div className="content-frame detail-proof-grid">{data.proof.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.note}</small></div>)}</div></section>
    <section className="detail-question"><div className="content-frame detail-question-grid"><div className="section-kicker"><span className="section-number">01</span><span>{data.eyebrow}</span></div><div><p className="eyebrow">The gap</p><h2>{data.question}</h2><p className="section-lede">{data.questionCopy}</p><div className="detail-inline-note"><Check size={15} /><span>Signal first / decision attached / team-ready context</span></div></div></div></section>
    <section className="detail-steps"><div className="content-frame"><div className="detail-heading-row"><div><p className="eyebrow eyebrow--violet">How it works</p><h2>{data.stepsTitle}</h2></div><p>{data.stepsIntro}</p></div><div className="detail-step-grid">{data.steps.map((step) => <article key={step.number}><span className="detail-step-number">{step.number}</span><div className="detail-step-icon">{step.number === "01" ? <Search size={18} /> : step.number === "02" ? <TrendingUp size={18} /> : <Layers3 size={18} />}</div><h3>{step.title}</h3><p>{step.copy}</p><div className="detail-tags">{step.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>
    <section className="detail-operations"><div className="content-frame detail-operations-grid"><div className="detail-operations-copy"><p className="eyebrow">Behind the numbers</p><h2>{data.operationsTitle}</h2><p className="section-lede">{data.operationsCopy}</p><ul>{["A signal with context, not a naked number", "An owner attached to each next action", "A review window that keeps the decision honest"].map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul><Link className="text-link" href={data.primaryHref}>{data.primary} <ArrowUpRight size={16} /></Link></div><div className="detail-operations-card"><div className="operations-card-head"><span><i />live operating surface</span><b>{data.theme === "resources" ? "library" : data.theme === "book" ? "brief" : "today"}</b></div>{data.operationRows.map((row) => <div className="operations-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong><small>{row.note}</small></div>)}<div className="operations-card-footer"><span>SignalStay / illustrative view</span><ArrowUpRight size={14} /></div></div></div></section>
    {(route === "str" || route === "revenue" || route === "hotel" || route === "hotel-revenue") && <RevenueAutopilotDashboard hotel={route === "hotel" || route === "hotel-revenue"} />}
    {route === "book" ? <section className="detail-booking"><div className="content-frame detail-booking-grid"><div><p className="eyebrow eyebrow--violet">Free / no commitment</p><h2>A clearer first<br /><em>conversation.</em></h2><p className="section-lede">{data.questionCopy}</p><div className="booking-points"><span><Clock3 size={16} />30 minutes</span><span><MessageCircle size={16} />Operator-led</span><span><ShieldCheck size={16} />No commitment</span></div></div><DetailForm /></div></section> : <section className="detail-faq-section"><div className="content-frame detail-faq-grid"><div><p className="eyebrow eyebrow--violet">Questions operators ask</p><h2>Keep the<br /><em>conversation useful.</em></h2><p className="section-lede">A good page should answer the practical questions before the first conversation starts.</p></div><DetailFaq faqs={data.faqs} /></div></section>}
    <section className="detail-cta" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,13,34,.96), rgba(8,13,34,.68)), url(${closingImage})` }}><div className="content-frame"><p className="eyebrow eyebrow--violet">A better read changes the next move</p><h2>{route === "book" ? "Bring us the signal." : "See what is moving"}<br /><em>{route === "book" ? "We will map it together." : "before the calendar."}</em></h2><Link className="button button--violet" href="/book-a-call-with-our-experts">Book a signal review <ArrowUpRight size={16} /></Link></div></section>
  </main><SiteFooter /></div>;
}
