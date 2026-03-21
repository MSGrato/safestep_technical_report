export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  assetPath?: string;
  placeholder?: string;
}

export interface StackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface CodeHighlight {
  title: string;
  language: string;
  note: string;
  code: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface RiskItem {
  title: string;
  mitigation: string;
}

export interface ProjectPageData {
  slug: string;
  title: string;
  subtitle: string;
  ownerLine: string;
  executiveSummary: string;
  instructions: string[];
  links: ProjectLink[];
  badges: string[];
  methods: string[];
  metrics: ProjectMetric[];
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  keywords: string[];
  members: TeamMember[];
  gallery: GalleryItem[];
  stack: StackGroup[];
  features: FeatureCard[];
  architecture: ArchitectureItem[];
  codeHighlights: CodeHighlight[];
  roadmap: RoadmapPhase[];
  risks: RiskItem[];
}

export const projectData: ProjectPageData = {
  slug: 'safestep',

  title: 'SafeStep',
  subtitle: 'AI-powered safety planning for domestic violence survivors, hidden inside an ordinary-looking app.',
  ownerLine: 'MSIS 522 Team 3 - Anushka Chougule, Li Huai, Miranda Grato, Rithvik Ravi',
  executiveSummary:
    'SafeStep is a privacy-first mobile web app that helps domestic violence survivors create a personalized exit plan without raising suspicion on a shared or monitored device. The app disguises itself as a recipe, notes, or weather app on the home screen - a triple-tap reveals the real interface. From there, a 5-question intake drives the Claude API to generate a tailored, prioritized safety checklist. A Google Places integration surfaces nearby shelters, legal aid, and counselors by ZIP code. A context-aware streaming AI chat provides ongoing support with a hard crisis override that routes to 911 or the National DV Hotline when users indicate immediate danger. Every design decision - the decoy screen, local-only storage, quick exit button, and safety check gate - was built around the specific threat model a survivor faces.',

  instructions: [
    'Replace every bracketed placeholder with project-specific content.',
    'Drop screenshots, PDFs, diagrams, or photos into public/project-assets and reference them here.',
    'Add or remove cards by editing arrays in this file instead of rewriting the page layout.',
    'Keep the executive summary concise, but make the stack, methods, feature cards, and architecture specific and concrete.',
  ],

  links: [
    { label: 'Live Demo', url: 'https://safe-step-tool.lovable.app/', primary: true },
    { label: 'GitHub Repo', url: 'https://github.com/MSGrato/safe-step' },
    { label: 'Slides', url: '/project-assets/final-slides.pptx' },
  ],

  badges: ['React', 'TypeScript', 'Supabase', 'Claude API', 'Google Places API', 'Tailwind CSS', 'shadcn-ui'],

  keywords: ['domestic violence', 'safety planning', 'AI', 'privacy', 'decoy interface', 'trauma-informed'],

  methods: [
    'Prompt engineering for trauma-informed tone',
    'Supabase Edge Functions as AI proxy layer',
    'Server-Sent Events (SSE) for streaming chat',
    'Local-only storage for survivor privacy',
  ],

  metrics: [
    { label: 'Team', value: '4 students', note: 'Anushka Chougule, Li Huai, Miranda Grato, Rithvik Ravi' },
    { label: 'Core User', value: 'DV survivors', note: 'Especially those on shared or monitored devices' },
    { label: 'Decoy Skins', value: '3', note: 'Recipe App, Notes App, Weather App' },
    { label: 'Intake Questions', value: '5', note: 'Children, finances, documents, contacts, timeline' },
  ],

  problemStatement:
    '1 in 4 women and 1 in 9 men in the US experience domestic violence. The most dangerous moment is planning to leave - when abusers are most likely to retaliate. Existing tools such as hotlines, shelter directories, and generic checklists are not discreet, not personalized, and not safe to use on a monitored device.',

  solutionSummary:
    'SafeStep hides behind a user-chosen decoy app (recipe, notes, or weather). A triple-tap anywhere on the decoy title reveals the real interface, where a 5-question AI-powered intake generates a personalized exit checklist via Claude, a ZIP-based resource lookup surfaces nearby shelters and legal aid via Google Places, and a trauma-informed AI chat provides ongoing support. One tap on the quick-exit button returns to the decoy and clears visible session state instantly.',

  audience: 'Domestic violence survivors, especially those on shared or monitored devices',

  impactGoal:
    'Reduce the risk of detection while planning to leave by giving survivors a safe, personalized, and always-accessible planning tool that fits inside an ordinary-looking app.',

  status: 'Prototype',

  members: [
    { name: 'Anushka Chougule', role: 'AI and Prompts', focus: 'Claude API integration and trauma-informed system prompt design' },
    { name: 'Li Huai', role: 'Full Stack', focus: 'Supabase Edge Functions and backend architecture' },
    { name: 'Miranda Grato', role: 'Frontend', focus: 'React UI, decoy skins, and onboarding flow' },
    { name: 'Rithvik Ravi', role: 'Research and Ethics', focus: 'DV advocate review, Anthropic high-risk compliance, and resources integration' },
  ],

  gallery: [
    {
      title: 'Decoy Interface',
      caption: 'SafeStep hides behind a normal-looking app. Users choose their disguise during onboarding - recipe, notes, or weather. Triple-tapping the app title reveals the real interface.',
      assetPath: '/project-assets/example-screen.png',
    },
    {
      title: 'AI Safety Plan',
      caption: 'After completing a 5-question intake, Claude generates a personalized, prioritized exit checklist. Users can check off items as they complete them, with progress tracked locally.',
      placeholder: 'Add a screenshot of the intake form and the generated checklist',
    },
    {
      title: 'Resource Lookup and Chat',
      caption: 'Entering a ZIP code surfaces nearby shelters, legal aid, and counselors via Google Places. The AI chat uses the safety plan and resource results as context for personalized support.',
      placeholder: 'Add a screenshot of the resources tab and chat interface',
    },
  ],

  stack: [
    {
      category: 'Frontend and Experience',
      tools: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn-ui', 'Lucide React'],
      note: 'Mobile-first layout with fixed bottom navigation and large touch targets. Three fully functional decoy skins (RecipeApp, NotesApp, WeatherApp) built as standalone React components. A custom useTripleTap hook handles the gesture reveal.',
    },
    {
      category: 'AI and Orchestration',
      tools: ['Claude API (Anthropic)', 'Supabase Edge Functions', 'Server-Sent Events (SSE)', 'Trauma-informed system prompts'],
      note: 'All Claude API calls are proxied through Supabase Edge Functions so API keys never reach the client. The safety-plan function returns a line-separated checklist. The chat function streams token-by-token via SSE with a hard crisis override: if the user indicates immediate danger, Claude responds only with hotline and 911 information.',
    },
    {
      category: 'Data, Backend, and Integrations',
      tools: ['Supabase', 'Google Places API', 'Browser localStorage', 'No server-side user data'],
      note: 'User data - intake answers, checklist progress, chat history, resource results - is stored only in the local browser via localStorage. Google Places is also proxied through a Supabase Edge Function. There is no user account or remote database storing survivor information.',
    },
  ],

  features: [
    {
      title: 'Decoy Interface with Triple-Tap Reveal',
      description: 'Users pick a disguise during onboarding - recipe, notes, or weather app. The decoy renders as a full, convincing standalone app. A custom useTripleTap hook listens for three taps within 500ms to trigger the mode switch. Before entering the real interface, a safety check screen confirms the user is safe and offers the DV Hotline number.',
      highlights: [
        'Three fully built decoy skins: RecipeApp, NotesApp, WeatherApp',
        'Triple-tap gesture via custom React hook with configurable 500ms timeout',
        'Safety check gate with one-tap access to National DV Hotline (1-800-799-7233)',
      ],
    },
    {
      title: 'AI-Powered Personalized Safety Plan',
      description: 'A 5-question intake collects situational details: whether children are involved, financial access, document availability, trusted contacts, and planned timeline. These answers are injected into a trauma-informed system prompt using build_safety_prompt(), which Claude uses to generate a 6-8 item prioritized exit checklist. The checklist is interactive and all progress is saved locally.',
      highlights: [
        '5-question sequential intake with visual step progress indicator',
        'Supabase Edge Function safety-plan calls Claude with context-filled prompt',
        'Interactive checklist with local persistence and item-level completion tracking',
      ],
    },
    {
      title: 'ZIP-Based Resource Lookup',
      description: 'Users enter their ZIP code to search for nearby shelters, legal aid offices, and counseling services. The frontend calls a Supabase Edge Function that queries Google Places for each of the three resource types. Results render as categorized cards with address and a Google Maps link. A persistent National DV Hotline card always appears regardless of search results.',
      highlights: [
        'Three parallel resource searches: shelter, legal aid, counseling',
        'Google Places API proxied through Supabase Edge Function',
        'Persistent crisis hotline card always visible at the top',
      ],
    },
    {
      title: 'Trauma-Informed Streaming AI Chat',
      description: 'The chat tab provides an ongoing support channel powered by Claude. The assistant receives the intake answers, current checklist, and resource results as context so responses are personalized. Responses stream line-by-line via SSE. A safety banner reminds users to call 911 for immediate danger, and if the message indicates imminent risk, the system prompt overrides Claude to respond only with crisis resources.',
      highlights: [
        'SSE streaming for real-time token-by-token response display',
        'Context injection: intake answers + checklist items + places results',
        'Hard crisis override: immediate danger triggers hotline-only response',
      ],
    },
    {
      title: 'Quick Exit and Local-Only Privacy Model',
      description: 'A persistent quick-exit button on the real interface returns the user to the decoy app in a single tap and clears visible session state immediately. All user data is stored only in localStorage with no server-side copy. A reset option in settings wipes all data and returns to onboarding with a two-step confirmation.',
      highlights: [
        'One-tap quick exit back to decoy with session state cleared from view',
        'All sensitive data in localStorage only - no server copy exists',
        'Full data wipe with two-step confirmation in settings',
      ],
    },
  ],

  architecture: [
    {
      title: 'Input Layer',
      description: 'Six-step onboarding collects decoy skin preference and privacy policy acceptance. The 5-question intake form captures children, finances, documents, trusted contacts, and timeline. The resources tab accepts a ZIP code. The chat tab accepts free-text messages. No raw user data leaves the device - only anonymized API payloads reach Supabase Edge Functions.',
    },
    {
      title: 'AI Orchestration Layer',
      description: 'All external API calls go through Supabase Edge Functions. The safety-plan function fills a structured system prompt with intake data and calls Claude to generate the checklist. The chatbot function injects full survivor context and streams Claude responses via SSE. The places function queries Google Places for three resource categories and returns structured results.',
    },
    {
      title: 'Safety and Decision Layer',
      description: 'Three hard guardrails: (1) the SafetyCheckScreen gate blocks entry to the real interface until the user confirms they are safe or is routed to crisis resources; (2) the Claude chatbot system prompt includes a mandatory override rule that limits responses to crisis contacts when immediate danger is detected; (3) the quick-exit button and local-only storage ensure no session data is exposed on an unattended device.',
    },
    {
      title: 'Output Layer',
      description: 'The safety plan renders as an interactive checklist with per-item completion state. The resources tab shows categorized place cards with address and Google Maps links. The chat renders streaming markdown responses with distinct user and assistant bubbles. All output is persisted locally and fully wiped on reset.',
    },
  ],

  codeHighlights: [
    {
      title: 'Trauma-Informed Prompt Builder (Python)',
      language: 'python',
      note: 'build_safety_prompt() fills a structured Claude system prompt with intake data, defaulting missing fields to "unknown" rather than omitting context. The prompt instructs Claude to use calm, non-judgmental language, produce a 6-8 item prioritized checklist, and include child-safety items only when relevant.',
      code: `def build_safety_prompt(intake_data: dict) -> str:
    children  = intake_data.get("children", "unknown")
    finances  = intake_data.get("finances", "unknown")
    documents = intake_data.get("documents", "unknown")
    contacts  = intake_data.get("contacts", "unknown")
    timeline  = intake_data.get("timeline", "unknown")

    return SAFETY_PLAN_PROMPT.format(
        children=children,
        finances=finances,
        documents=documents,
        contacts=contacts,
        timeline=timeline,
    )`,
    },
    {
      title: 'Triple-Tap Reveal Hook (TypeScript)',
      language: 'ts',
      note: 'useTripleTap tracks the last N tap timestamps in a ref. If three taps occur within the timeout window, the toggle callback fires. This lets SafeStep stay hidden behind a decoy with a gesture that looks like an accidental mis-tap.',
      code: `export function useTripleTap(onTripleTap: () => void, timeout = 500) {
  const taps = useRef<number[]>([]);

  return useCallback(() => {
    const now = Date.now();
    taps.current = [...taps.current, now].filter(t => now - t < timeout);
    if (taps.current.length >= 3) {
      taps.current = [];
      onTripleTap();
    }
  }, [onTripleTap, timeout]);
}`,
    },
  ],

  roadmap: [
    {
      phase: 'Now',
      items: [
        'Three decoy skins: recipe, notes, weather - with triple-tap reveal',
        'AI safety plan generated from 5-question intake via Claude API',
        'ZIP-based resource lookup for shelters, legal aid, and counseling via Google Places',
        'Streaming trauma-informed chat with hard crisis override',
        'Quick exit button and local-only privacy model with full data wipe',
      ],
    },
    {
      phase: 'Next',
      items: [
        'Multilingual support - Spanish, Mandarin, and additional languages',
        'Advocate review mode - trained DV counselors verify AI-generated plans before delivery',
        'Native iOS and Android app with biometric unlock (Face ID and fingerprint)',
      ],
    },
    {
      phase: 'Later',
      items: [
        'Anonymized outcome tracking to improve AI safety plan recommendations over time',
        'Partnership with DV organizations to build a verified advocate review network',
        'Expanded resource database with real-time shelter availability and capacity data',
      ],
    },
  ],

  risks: [
    {
      title: 'Stalkerware and Device Monitoring',
      mitigation: 'The decoy interface and quick exit reduce casual discovery, but app-level protection cannot defeat dedicated monitoring software. Users are warned during onboarding to use a trusted device. No data is stored server-side, limiting exposure from remote access tools.',
    },
    {
      title: 'AI Is Not a Substitute for Professional Counseling',
      mitigation: 'The Claude system prompt explicitly forbids legal or medical advice and clinical jargon. Every plan includes a disclaimer recommending local DV advocates. The chat crisis override routes to 911 or the National Hotline the moment immediate danger is detected.',
    },
    {
      title: 'Trauma-Informed Language and Anthropic Compliance',
      mitigation: 'System prompts were designed against trauma-informed communication guidelines and reviewed for appropriateness. The project follows Anthropic high-risk use case requirements including AI disclosure, a planned human advocate review mode, and a response flagging mechanism built into the chat UI.',
    },
    {
      title: 'Resource Data Accuracy',
      mitigation: 'Google Places data can be outdated or incomplete. A persistent National DV Hotline card always appears regardless of search results. Future versions will supplement Places data with verified shelter databases maintained by DV organizations.',
    },
  ],
};
