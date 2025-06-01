// --- Exercise Data (Manually parsed from Vocabulary for Proficiency C2 Final.docx) ---
// This is the core data for all exercises.
// Each exercise object includes its title, the text with blanks, and details for each question (blank number, options, and correct answer).
const exercises = [
    {
        "exerciseId": 1,
        "title": "CORPORATE ENVIRONMENTAL COMMITMENTS",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null, // Exercise 1 from docx doesn't have an explicit '0' example like the PDF model, so null for now.
        "textWithBlanks": "Climate change activism has become increasingly (1) ______ in recent years, as younger generations demand that corporations demonstrate real commitment rather than mere (2) ______ slogans. Many firms have adopted sustainability reports that highlight their efforts to (3) ______ carbon emissions, yet critics argue that such initiatives are often little more than (4) ______ gestures designed to appease concerned stakeholders. The crucial challenge lies in transforming well‐intentioned rhetoric into substantive policy changes that (5) ______ the root causes of environmental degradation. Without rigorous oversight, even the most (6) ______ companies risk being accused of (7) ______—promoting eco‐friendly facades while continuing practices that are environmentally (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["ubiquitous", "conspicuous", "dormant", "negligible"],
                "correctAnswer": "conspicuous" //
            },
            {
                "blankNumber": 2,
                "options": ["pithy", "inane", "vacuous", "trenchant"],
                "correctAnswer": "vacuous" //
            },
            {
                "blankNumber": 3,
                "options": ["mitigate", "exacerbate", "obfuscate", "authenticate"],
                "correctAnswer": "mitigate" //
            },
            {
                "blankNumber": 4,
                "options": ["perfunctory", "seminal", "salubrious", "ingenuous"],
                "correctAnswer": "perfunctory" //
            },
            {
                "blankNumber": 5,
                "options": ["circumvent", "exacerbate", "ameliorate", "perpetuate"],
                "correctAnswer": "ameliorate" //
            },
            {
                "blankNumber": 6,
                "options": ["ostensible", "onerous", "jejune", "languid"],
                "correctAnswer": "ostensible" //
            },
            {
                "blankNumber": 7,
                "options": ["obsequiousness", "rapprochement", "greenwashing", "ennui"],
                "correctAnswer": "greenwashing" //
            },
            {
                "blankNumber": 8,
                "options": ["deleterious", "benign", "innocuous", "propitious"],
                "correctAnswer": "deleterious" //
            }
        ]
    },
    {
        "exerciseId": 2,
        "title": "DIGITAL PRIVACY CHALLENGES",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "In an era dominated by digital communication, the notion of privacy has become increasingly (1) ______. Social media platforms often encourage users to relinquish control over personal data, making it difficult to discern which information remains (2) ______ and which has been disseminated to third parties. As a result, individuals must cultivate a more (3) ______ understanding of how their digital footprints can be exploited for targeted advertising or even identity theft. Ironically, many users find themselves (4) ______ in a cycle of oversharing, driven by the allure of instant validation. Some experts suggest that only by developing a (5) ______ approach to online engagement—entailing selective disclosure and rigorous scrutiny—can one hope to (6) ______ the perils of an ever‐expanding digital footprint. Otherwise, the boundary between public and private becomes (7) ______, and the possibility of regretting one’s disclosures grows (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["equivocal", "sacrosanct", "arcane", "magnanimous"],
                "correctAnswer": "arcane" //
            },
            {
                "blankNumber": 2,
                "options": ["ephemeral", "inviolable", "ostentatious", "culpable"],
                "correctAnswer": "inviolable" //
            },
            {
                "blankNumber": 3,
                "options": ["capricious", "sophisticated", "spurious", "jejune"],
                "correctAnswer": "sophisticated" //
            },
            {
                "blankNumber": 4,
                "options": ["embroiled", "elated", "ensconced", "enervated"],
                "correctAnswer": "ensconced" //
            },
            {
                "blankNumber": 5,
                "options": ["perfunctory", "circumspect", "desultory", "mercurial"],
                "correctAnswer": "circumspect" //
            },
            {
                "blankNumber": 6,
                "options": ["exacerbate", "extirpate", "attenuate", "venerate"],
                "correctAnswer": "attenuate" //
            },
            {
                "blankNumber": 7,
                "options": ["pellucid", "intransigent", "nebulous", "mendacious"],
                "correctAnswer": "nebulous" //
            },
            {
                "blankNumber": 8,
                "options": ["diaphanous", "perennial", "inordinately", "appreciable"],
                "correctAnswer": "appreciable" //
            }
        ]
    },
    {
        "exerciseId": 3,
        "title": "CONTEXT IN MODERN ART",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Scholarship on modern art frequently (1) ______ the importance of context, arguing that without knowledge of an artist’s background, viewers may overlook the (2) ______ subtleties embedded in a work. For example, abstract painters often employ (3) ______ color palettes that, to the uninitiated eye, may seem arbitrary; yet, these choices can be laden with political or cultural (4) ______. Similarly, installations that appear to rely on (5) ______ motifs may in fact be a (6) ______ commentary on social inequities. Despite the (7) ______ of art criticism in decoding such works, some purists contend that art should remain entirely (8) ______, unencumbered by extraneous interpretation.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["extols", "repudiates", "ossifies", "exculpates"],
                "correctAnswer": "extols" //
            },
            {
                "blankNumber": 2,
                "options": ["banal", "recondite", "quotidian", "manifest"],
                "correctAnswer": "recondite" //
            },
            {
                "blankNumber": 3,
                "options": ["punctilious", "cacophonous", "muted", "garish"],
                "correctAnswer": "muted" //
            },
            {
                "blankNumber": 4,
                "options": ["gravitas", "platitude", "veracity", "auspices"],
                "correctAnswer": "gravitas" //
            },
            {
                "blankNumber": 5,
                "options": ["anachronistic", "transcendental", "prosaic", "superfluous"],
                "correctAnswer": "superfluous" //
            },
            {
                "blankNumber": 6,
                "options": ["trenchant", "contrived", "peccant", "arcane"],
                "correctAnswer": "trenchant" //
            },
            {
                "blankNumber": 7,
                "options": ["fatuity", "perspicacity", "torpor", "perfidy"],
                "correctAnswer": "perspicacity" //
            },
            {
                "blankNumber": 8,
                "options": ["insular", "democratic", "contingent", "hermetic"],
                "correctAnswer": "hermetic" //
            }
        ]
    },
    {
        "exerciseId": 4,
        "title": "ETHICAL IMPLICATIONS OF AI",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Advances in artificial intelligence have led to the emergence of algorithms capable of (1) ______ decisions once thought to require human intuition. Some critics, however, warn of the (2) ______ consequences of delegating moral judgments to machines, particularly when those systems operate in a (3) ______ fashion, devoid of transparency. Proponents argue that algorithmic neutrality can (4) ______ biases inherent in human decision‐making, yet numerous studies have uncovered how data sets themselves may be (5) ______, perpetuating existing inequities. To confront these challenges, researchers advocate for a framework that combines rigorous technical oversight with (6) ______ ethical guidelines. Only then can society hope to harness the (7) ______ promise of AI while safeguarding against its more (8) ______ ramifications.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["usurp", "obviate", "inculcate", "abrogate"],
                "correctAnswer": "obviate" //
            },
            {
                "blankNumber": 2,
                "options": ["salutary", "deleterious", "halcyon", "benign"],
                "correctAnswer": "deleterious" //
            },
            {
                "blankNumber": 3,
                "options": ["pellucid", "abstruse", "impromptu", "prosaic"],
                "correctAnswer": "abstruse" //
            },
            {
                "blankNumber": 4,
                "options": ["exacerbate", "attenuate", "venerate", "lionize"],
                "correctAnswer": "attenuate" //
            },
            {
                "blankNumber": 5,
                "options": ["fallible", "immutable", "pristine", "redundant"],
                "correctAnswer": "fallible" //
            },
            {
                "blankNumber": 6,
                "options": ["scrupulous", "desultory", "ignominious", "clandestine"],
                "correctAnswer": "scrupulous" //
            },
            {
                "blankNumber": 7,
                "options": ["quixotic", "latent", "unassailable", "protean"],
                "correctAnswer": "protean" //
            },
            {
                "blankNumber": 8,
                "options": ["innocuous", "ephemeral", "catastrophic", "mercurial"],
                "correctAnswer": "catastrophic" //
            }
        ]
    },
    {
        "exerciseId": 5,
        "title": "PERSPECTIVES ON GLOBAL MIGRATION",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "In discussions of global migration, policymakers often invoke (1) ______ arguments about economic necessity, stressing that mobility fosters innovation and dynamism. Yet this perspective can overlook the very real (2) ______ experienced by migrants, from bureaucratic obstacles to cultural alienation. Many migrant communities exhibit (3) ______ levels of resilience, building support networks in the face of systemic adversity. Still, the discourse remains (4) ______, with heated debates sometimes reduced to binary positions that obscure the nuanced realities on the ground. A more (5) ______ approach would integrate economic metrics with qualitative assessments of social integration, thereby offering a (6) ______ view of migration’s benefits and costs. Only by acknowledging both (7) ______ and drawbacks can societies develop policies that are truly (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["specious", "adroit", "incontrovertible", "equivocal"],
                "correctAnswer": "incontrovertible" //
            },
            {
                "blankNumber": 2,
                "options": ["vicissitudes", "panacea", "echelons", "quiddity"],
                "correctAnswer": "vicissitudes" //
            },
            {
                "blankNumber": 3,
                "options": ["palpable", "inchoate", "prodigious", "intermittent"],
                "correctAnswer": "prodigious" //
            },
            {
                "blankNumber": 4,
                "options": ["vitriolic", "sanguine", "pellucid", "inscrutable"],
                "correctAnswer": "vitriolic" //
            },
            {
                "blankNumber": 5,
                "options": ["circumscribed", "multifaceted", "peremptory", "transient"],
                "correctAnswer": "multifaceted" //
            },
            {
                "blankNumber": 6,
                "options": ["jaundiced", "myopic", "holistic", "desultory"],
                "correctAnswer": "holistic" //
            },
            {
                "blankNumber": 7,
                "options": ["impediments", "panegyrics", "proclivities", "imprecations"],
                "correctAnswer": "impediments" //
            },
            {
                "blankNumber": 8,
                "options": ["parochial", "equitable", "perfidious", "grandiloquent"],
                "correctAnswer": "equitable" //
            }
        ]
    },
    {
        "exerciseId": 6,
        "title": "VALUING LINGUISTIC VARIATION",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The study of linguistic variation has revealed that dialects once dismissed as (1) ______ or substandard actually embody rich grammatical systems and distinctive lexicons. Early prescriptive grammarians often (2) ______ nonstandard varieties as evidence of ignorance, yet sociolinguistic research has since demonstrated that these forms adhere to consistent patterns and convey social identity. Some educators now advocate for a (3) ______ pedagogy that recognizes students’ home dialects as assets rather than deficits. By contrast, a strictly (4) ______ curriculum can alienate learners, leading to issues of self‐esteem and disengagement. Incorporating dialectal variation into the classroom demands both (5) ______ and sensitivity, ensuring that students feel valued while also acquiring standard academic registers. Such an approach fosters (6) ______—the capacity to navigate multiple linguistic contexts—rather than (7) ______ monolingualism. Ultimately, valuing linguistic diversity can (8) ______ students’ confidence and broaden their communicative repertoires.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["heirloom", "vernacular", "arcane", "rudimentary"],
                "correctAnswer": "vernacular" //
            },
            {
                "blankNumber": 2,
                "options": ["extolled", "vilified", "ameliorated", "venerated"],
                "correctAnswer": "vilified" //
            },
            {
                "blankNumber": 3,
                "options": ["didactic", "prescriptive", "metalinguistic", "tethered"],
                "correctAnswer": "metalinguistic" //
            },
            {
                "blankNumber": 4,
                "options": ["ecumenical", "ossified", "syncretic", "eclectic"],
                "correctAnswer": "ossified" //
            },
            {
                "blankNumber": 5,
                "options": ["forbearance", "truculence", "obduracy", "cacophony"],
                "correctAnswer": "forbearance" //
            },
            {
                "blankNumber": 6,
                "options": ["diglossia", "monogamy", "reciprocity", "homogeneity"],
                "correctAnswer": "diglossia" //
            },
            {
                "blankNumber": 7,
                "options": ["insular", "cosmopolitan", "itinerant", "parochial"],
                "correctAnswer": "insular" //
            },
            {
                "blankNumber": 8,
                "options": ["stymie", "vitiate", "galvanized", "obviate"],
                "correctAnswer": "galvanized" //
            }
        ]
    },
    {
        "exerciseId": 7,
        "title": "SUSTAINABLE ECONOMIC DEVELOPMENT",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Contemporary economic theory often underscores the importance of (1) ______ growth—advancement that balances profitability with social welfare and environmental protection. Critics of purely (2) ______ models contend that an unrelenting focus on gross domestic product can mask inequities and negative externalities. Instead, proponents of sustainable development propose metrics that (3) ______ not only economic output but also quality of life indicators such as health, education, and environmental quality. Such multidimensional measures aim to (4) ______ the limitations inherent in single‐minded growth paradigms. However, implementing these frameworks requires overcoming (5) ______ institutional inertia and vested interests that benefit from the status quo. Policymakers must be willing to engage in (6) ______ negotiations, balancing short‐term gains against long‐term stability. Only through a (7) ______ commitment to holistic metrics can societies avert the most severe consequences of (8) ______ growth.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["pernicious", "symbiotic", "eclectic", "holistic"],
                "correctAnswer": "holistic" //
            },
            {
                "blankNumber": 2,
                "options": ["laissez‐faire", "didactic", "ephemeral", "ostentatious"],
                "correctAnswer": "laissez‐faire" //
            },
            {
                "blankNumber": 3,
                "options": ["eschew", "encompass", "repudiate", "exacerbate"],
                "correctAnswer": "encompass" //
            },
            {
                "blankNumber": 4,
                "options": ["illuminat", "obfuscate", "stagnate", "capitulate"],
                "correctAnswer": "illuminat" //
            },
            {
                "blankNumber": 5,
                "options": ["contumacious", "recalcitrant", "transient", "auspicious"],
                "correctAnswer": "recalcitrant" //
            },
            {
                "blankNumber": 6,
                "options": ["salutatory", "fractious", "collaborative", "clandestine"],
                "correctAnswer": "collaborative" //
            },
            {
                "blankNumber": 7,
                "options": ["perfunctory", "unwavering", "profligate", "labyrinthine"],
                "correctAnswer": "unwavering" //
            },
            {
                "blankNumber": 8,
                "options": ["deleterious", "euphoric", "seminal", "innocuous"],
                "correctAnswer": "deleterious" //
            }
        ]
    },
    {
        "exerciseId": 8,
        "title": "WORK–LIFE BALANCE IN THE DIGITAL AGE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "In recent decades, the concept of “work–life balance” has become a (1) ______ paradigm within organizational psychology. Scholars argue that employees who maintain clear boundaries between professional and personal domains are less likely to experience chronic stress or (2) ______ burnout. Conversely, the advent of remote work and (3) ______ communication tools has rendered such delineations increasingly porous. Many workers now find themselves (4) ______ emails late into the evening, unable to resist the compulsion to stay connected. Employers, in turn, may inadvertently foster a culture of (5) ______ availability that erodes well‐being. To redress this trend, companies are experimenting with measures such as mandatory digital “detoxes” and designated offline hours, aiming to (6) ______ worker autonomy. While some critics view these interventions as (7) ______, empirical data suggest they can substantially (8) ______ job satisfaction and retention.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["quaint", "multifarious", "venerated", "ubiquitous"],
                "correctAnswer": "ubiquitous" //
            },
            {
                "blankNumber": 2,
                "options": ["intransigent", "multifaceted", "insidious", "ephemeral"],
                "correctAnswer": "insidious" //
            },
            {
                "blankNumber": 3,
                "options": ["anachronistic", "intermittent", "ubiquitous", "clandestine"],
                "correctAnswer": "ubiquitous" //
            },
            {
                "blankNumber": 4,
                "options": ["submerged", "entangled", "emancipated", "exonerated"],
                "correctAnswer": "entangled" //
            },
            {
                "blankNumber": 5,
                "options": ["sanguine", "incessant", "circumspect", "pernicious"],
                "correctAnswer": "pernicious" //
            },
            {
                "blankNumber": 6,
                "options": ["abdicate", "venerate", "promulgate", "acre"],
                "correctAnswer": "promulgate" //
            },
            {
                "blankNumber": 7,
                "options": ["quixotic", "nefarious", "lucrative", "laudable"],
                "correctAnswer": "quixotic" //
            },
            {
                "blankNumber": 8,
                "options": ["attenuate", "extirpate", "prognosticate", "recalibrate"],
                "correctAnswer": "attenuate" //
            }
        ]
    },
    {
        "exerciseId": 9,
        "title": "TEACHING CLASSICAL LITERATURE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The resurgence of interest in classical literature has prompted educators to (1) ______ courses that juxtapose ancient texts with contemporary interpretations. By examining Homeric epics alongside modern graphic novels, students can observe how themes of heroism and hubris remain (2) ______. Critics of this approach argue that it risks (3) ______ the original works, reducing their subtleties to mere tropes. Proponents counter that, far from diluting the classics, such pairings often (4) ______ fresh insights, illuminating parallels across centuries. In one notable program, a medieval epic was taught in tandem with a postmodern short story, revealing enduring questions about power, morality, and (5) ______. Although some purists worry that novel interpretations may (6) ______ canonical status, the pedagogical benefits of (7) ______ student engagement are hard to deny. Ultimately, by fostering an (8) ______ dialogue between past and present, educators hope to keep classical works relevant and vibrant.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["excise", "orchestrate", "expunge", "willy‐nilly"],
                "correctAnswer": "orchestrate" //
            },
            {
                "blankNumber": 2,
                "options": ["anachronistic", "immutable", "ephemeral", "abstruse"],
                "correctAnswer": "immutable" //
            },
            {
                "blankNumber": 3,
                "options": ["vitiating", "elucidating", "fomenting", "appeasing"],
                "correctAnswer": "vitiating" //
            },
            {
                "blankNumber": 4,
                "options": ["engender", "obviate", "obfuscate", "besmirch"],
                "correctAnswer": "engender" //
            },
            {
                "blankNumber": 5,
                "options": ["verisimilitude", "chrysalis", "ignominy", "consummation"],
                "correctAnswer": "verisimilitude" //
            },
            {
                "blankNumber": 6,
                "options": ["lionize", "jeopardize", "corroborate", "galvanize"],
                "correctAnswer": "jeopardize" //
            },
            {
                "blankNumber": 7,
                "options": ["quelling", "stymieing", "galvanizing", "spasmodic"],
                "correctAnswer": "galvanizing" //
            },
            {
                "blankNumber": 8,
                "options": ["insular", "interdisciplinary", "dissonant", "mendacious"],
                "correctAnswer": "interdisciplinary" //
            }
        ]
    },
    {
        "exerciseId": 10,
        "title": "RECONCEPTUALIZING MEMORY IN NEUROSCIENCE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Recent scholarship in neuroscience has begun to (1) ______ the traditional notion that memory functions like a static archive of past events. Instead, evidence suggests that recollections are (2) ______ each time they are retrieved, influenced by current emotions and contexts. This (3) ______ model of memory contradicts earlier theories positing a (4) ______ repository, separate from perceptual and affective systems. Experimental studies demonstrate that errors in recollection often stem from (5) ______ cues or interference, rather than simple decay over time. Moreover, interventions such as mindfulness meditation may (6) ______ one’s capacity to recall without distortion. Although some questions remain (7) ______, the emerging consensus underscores the (8) ______ nature of human memory.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["subvert", "validate", "encapsulate", "obfuscate"],
                "correctAnswer": "subvert" //
            },
            {
            "blankNumber": 2,
            "options": ["immutable", "malleable", "insipid", "galvanizing"],
            "correctAnswer": "malleable" //
            },
            {
                "blankNumber": 3,
                "options": ["parochial", "prevailing", "anachronistic", "antiquated"],
                "correctAnswer": "antiquated" //
            },
            {
                "blankNumber": 4,
                "options": ["protean", "fixed", "labyrinthine", "superfluous"],
                "correctAnswer": "fixed" //
            },
            {
                "blankNumber": 5,
                "options": ["extraneous", "prurient", "sanguine", "anomic"],
                "correctAnswer": "extraneous" //
            },
            {
                "blankNumber": 6,
                "options": ["vitiate", "augment", "nullify", "flummox"],
                "correctAnswer": "augment" //
            },
            {
                "blankNumber": 7,
                "options": ["quixotic", "redolent", "laconic", "unresolved"],
                "correctAnswer": "unresolved" //
            },
            {
                "blankNumber": 8,
                "options": ["ephemeral", "symmetrical", "ostentatious", "prosaic"],
                "correctAnswer": "ephemeral" //
            }
        ]
    },
    {
        "exerciseId": 11,
        "title": "ADVANCES IN QUANTUM COMPUTING",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The field of quantum computing is often described in (1) ______ terms, promising computational speeds that could (2) ______ classical supercomputers for certain tasks. At its core lies the qubit, which—unlike a binary bit—can exist in a (3) ______ superposition of states. This novel architecture allows for (4) ______ parallelism, potentially enabling algorithms to solve complex cryptographic problems in (5) ______ time. However, maintaining quantum coherence remains a (6) ______ challenge, as interactions with the environment can lead to rapid decoherence. To address this, researchers are developing error‐correction codes that strive to (7) ______ the effects of noise. While fully scalable quantum machines remain (8) ______, the pace of progress suggests a fundamentally new era of computation is on the horizon.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["oblique", "grandiose", "reticent", "inscrutable"],
                "correctAnswer": "grandiose" //
            },
            {
                "blankNumber": 2,
                "options": ["eclipse", "emulate", "abrogate", "truncate"],
                "correctAnswer": "eclipse" //
            },
            {
                "blankNumber": 3,
                "options": [" precarious", "transient", "dualistic", "probabilistic"],
                "correctAnswer": "probabilistic" //
            },
            {
                "blankNumber": 4,
                "options": ["exponential", "atavistic", "negligible", "jejune"],
                "correctAnswer": "exponential" //
            },
            {
                "blankNumber": 5,
                "options": ["tractable", "inordinate", "inconsequential", "incalculable"],
                "correctAnswer": "inordinate" //
            },
            {
                "blankNumber": 6,
                "options": ["trifling", "pernicious", "insurmountable", "transient"],
                "correctAnswer": "pernicious" //
            },
            {
                "blankNumber": 7,
                "options": ["exacerbate", "obfuscate", "ameliorate", "venerate"],
                "correctAnswer": "ameliorate" //
            },
            {
                "blankNumber": 8,
                "options": ["nascent", "archaic", "tenacious", "obsolete"],
                "correctAnswer": "nascent" //
            }
        ]
    },
    {
        "exerciseId": 12,
        "title": "POLITICAL RHETORIC AND DEMOCRACY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Political rhetoric has a long history of employing (1) ______ to sway public opinion, often invoking emotionally charged appeals rather than rational argumentation. Tactics such as dog‐whistle politics rely on (2) ______ language that conveys one message to the general populace while signaling another to a targeted subgroup. Critics assert that such strategies can (3) ______ democratic deliberation by encouraging polarization and eroding trust in institutions. In response, some commentators advocate for a return to (4) ______ discourse, in which politicians articulate policies based on evidence and transparent reasoning. Achieving this ideal requires media literacy and (5) ______ citizens who can discern logical fallacies and recognize when facts are being (6) ______. Though this vision may seem (7) ______ in our current polarized climate, civic education programs aim to nurture a more (8) ______ electorate.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["platitudes", "invective", "machinations", "fallacies"],
                "correctAnswer": "fallacies" //
            },
            {
                "blankNumber": 2,
                "options": ["pellucid", "equivocal", "trenchant", "nefarious"],
                "correctAnswer": "equivocal" //
            },
            {
                "blankNumber": 3,
                "options": ["facilitate", "undermine", "extol", "cogitate"],
                "correctAnswer": "undermine" //
            },
            {
                "blankNumber": 4,
                "options": ["mendacious", "rhetorical", "circumspect", "vitriolic"],
                "correctAnswer": "circumspect" //
            },
            {
                "blankNumber": 5,
                "options": ["jejune", "perspicacious", "recalcitrant", "insipid"],
                "correctAnswer": "perspicacious" //
            },
            {
                "blankNumber": 6,
                "options": ["appraised", "annealed", "obfuscated", "adjudicated"],
                "correctAnswer": "obfuscated" //
            },
            {
                "blankNumber": 7,
                "options": ["ubiquitous", "quixotic", "ambivalent", "axiomatic"],
                "correctAnswer": "quixotic" //
            },
            {
                "blankNumber": 8,
                "options": ["lugubrious", "discerning", "verdant", "clandestine"],
                "correctAnswer": "discerning" //
            }
        ]
    },
    {
        "exerciseId": 13,
        "title": "CONSERVATION OF CULTURAL HERITAGE SITES",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Cultural heritage sites require careful conservation, as exposure to mass tourism can impose (1) ______ burdens on fragile structures. While tourism generates vital revenue, it can also accelerate (2) ______ deterioration, especially in climates prone to humidity and pollution. Conservationists argue that preserving architectural integrity demands more than cosmetic repairs; it calls for (3) ______ interventions that respect original materials and techniques. Unfortunately, some restoration projects engage in (4) ______ practices—replacing time‐worn elements with modern substitutes that compromise authenticity. Advocates of best practices recommend an approach rooted in (5) ______ research, ensuring any modifications are reversible and minimally intrusive. By contrast, a haphazard strategy risks transforming historical monuments into (6) ______ imitations of their former selves. Ultimately, responsible stewardship depends on a (7) ______ equilibrium between accessibility and protection, lest these irreplaceable sites (8) ______ under the strain of unbridled tourism.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["onerous", "innocuous", "ebullient", "placid"],
                "correctAnswer": "onerous" //
            },
            {
                "blankNumber": 2,
                "options": ["precipitous", "glacial", "furtive", "unequivocal"],
                "correctAnswer": "precipitous" //
            },
            {
                "blankNumber": 3,
                "options": ["cursory", "meticulous", "perfunctory", "desultory"],
                "correctAnswer": "meticulous" //
            },
            {
                "blankNumber": 4,
                "options": ["anachronistic", "spurious", "venerable", "equtable"],
                "correctAnswer": "spurious" //
            },
            {
                "blankNumber": 5,
                "options": ["empirical", "axiomatic", "laconic", "nebulous"],
                "correctAnswer": "empirical" //
            },
            {
                "blankNumber": 6,
                "options": ["ersatz", "crystalline", "ephemeral", "recondite"],
                "correctAnswer": "ersatz" //
            },
            {
                "blankNumber": 7,
                "options": ["tenuous", "inviolable", "pellucid", "euphoric"],
                "correctAnswer": "tenuous" //
            },
            {
                "blankNumber": 8,
                "options": ["flounder", "capitulate", "flourish", "languish"],
                "correctAnswer": "languish" //
            }
        ]
    },
    {
        "exerciseId": 14,
        "title": "WORKPLACE MENTAL HEALTH",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The discourse around mental health in the workplace has shifted from viewing issues as individual (1) ______ to recognizing systemic factors that contribute to stress and burnout. Employers are increasingly acknowledging that organizational culture, workload, and management practices can all (2) ______ employees’ psychological well‐being. Programs offering mindfulness sessions and resilience training can be (3) ______, yet their efficacy often depends on whether they are paired with substantive policy changes—such as more flexible hours or increased mental health days. Otherwise, such initiatives risk being (4) ______ gestures that placate workers without addressing underlying problems. Research indicates that a truly supportive environment demands (5) ______ leadership willing to model healthy boundaries and encourage open dialogue. When done correctly, these measures foster (6) ______—employees feel valued, heard, and more capable of managing stressors. Conversely, neglecting mental health can result in (7) ______ turnover and diminished productivity, eroding an organization’s (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["lacunae", "peccadilloes", "anomalies", "deficits"],
                "correctAnswer": "deficits" //
            },
            {
                "blankNumber": 2,
                "options": ["ameliorate", "vitiate", "galvanize", "attenuate"],
                "correctAnswer": "vitiate" //
            },
            {
                "blankNumber": 3,
                "options": ["salutary", "oblique", "profligate", "puerile"],
                "correctAnswer": "salutary" //
            },
            {
                "blankNumber": 4,
                "options": ["perfidious", "perfunctory", "aesthetic", "raucous"],
                "correctAnswer": "perfunctory" //
            },
            {
                "blankNumber": 5,
                "options": ["recalcitrant", "munificent", "visionary", "salutary"],
                "correctAnswer": "visionary" //
            },
            {
                "blankNumber": 6,
                "options": ["camaraderie", "dissonance", "ennui", "myopia"],
                "correctAnswer": "camaraderie" //
            },
            {
                "blankNumber": 7,
                "options": ["internecine", "precipitous", "sanguine", "spurious"],
                "correctAnswer": "precipitous" //
            },
            {
                "blankNumber": 8,
                "options": ["doppelgänger", "esprit de corps", "pentimento", "aporia"],
                "correctAnswer": "esprit de corps" //
            }
        ]
    },
    {
        "exerciseId": 15,
        "title": "PROMOTING SCIENTIFIC LITERACY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Scientific literacy is increasingly (1) ______ as an indispensable skill in an age dominated by technological innovation and complex global challenges. Citizens must be able to (2) ______ scientific claims, discerning between credible research and (3) ______ pseudoscience. Unfortunately, educational systems sometimes prioritize rote memorization over (4) ______ inquiry, leaving students ill‐equipped to tackle novel problems. To remedy this, some curricula emphasize hands-on experiments designed to foster (5) ______ thinking and encourage learners to formulate their own hypotheses. Moreover, interdisciplinary projects can (6) ______ students to appreciate how science interacts with social, ethical, and economic domains. Although implementing such reforms may be (7) ______—requiring investment and teacher training—the long‐term benefits of a scientifically literate populace are (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["trivialized", "venerated", "obfuscated", "marginalized"],
                "correctAnswer": "marginalized" //
            },
            {
                "blankNumber": 2,
                "options": ["extol", "appraise", "repudiate", "obviate"],
                "correctAnswer": "appraise" //
            },
            {
                "blankNumber": 3,
                "options": ["specious", "anamorphic", "axiomatic", "extraneous"],
                "correctAnswer": "specious" //
            },
            {
                "blankNumber": 4,
                "options": ["peremptory", "inquisitive", "cacophonous", "ephemeral"],
                "correctAnswer": "inquisitive" //
            },
            {
                "blankNumber": 5,
                "options": ["sceptical", "recalcitrant", "vacuous", "fractious"],
                "correctAnswer": "sceptical" //
            },
            {
                "blankNumber": 6,
                "options": ["conscript", "forestall", "acclimate", "elucidate"],
                "correctAnswer": "elucidate" //
            },
            {
                "blankNumber": 7,
                "options": ["onerous", "ephemeral", "nefarious", "axiomatic"],
                "correctAnswer": "onerous" //
            },
            {
                "blankNumber": 8,
                "options": ["inconsequential", "indubitable", "labyrinthine", "itinerant"],
                "correctAnswer": "indubitable" //
            }
        ]
    },
    {
        "exerciseId": 16,
        "title": "THE EPHEMERAL NATURE OF FAME",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Fame, that elusive and often capricious mistress, is a phenomenon that has long fascinated humanity. While some individuals actively (1) ______ it, others find themselves thrust into the limelight almost by accident. What is undeniable, however, is its often (2) ______ nature. One moment an artist might be lauded as a genius, their work the (3) ______ of critical acclaim, and the next they could find themselves relegated to the footnotes of history. This swift ascent and equally swift (4) ______ from public consciousness serves as a stark reminder of how quickly tastes and priorities can shift. Those who manage to (5) ______ their fame over decades are truly exceptional, often possessing not only talent but also a shrewd understanding of public relations and the ability to reinvent themselves. For many, the initial dazzling (6) ______ of celebrity eventually fades, leaving behind a more mundane reality. It highlights the profound truth that while talent may be enduring, public attention is often a fleeting (7) ______ that demands constant (8) ______ to maintain its glow.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["pursue", "hunt", "chase", "stalk"],
                "correctAnswer": "pursue" //
            },
            {
                "blankNumber": 2,
                "options": ["transient", "momentary", "fleeting", "temporary"],
                "correctAnswer": "transient" //
            },
            {
                "blankNumber": 3,
                "options": ["focus", "object", "subject", "recipient"],
                "correctAnswer": "subject" //
            },
            {
                "blankNumber": 4,
                "options": ["descent", "fall", "plunge", "slide"],
                "correctAnswer": "descent" //
            },
            {
                "blankNumber": 5,
                "options": ["preserve", "sustain", "uphold", "retain"],
                "correctAnswer": "sustain" //
            },
            {
                "blankNumber": 6,
                "options": ["sparkle", "gleam", "lustre", "radiance"],
                "correctAnswer": "lustre" //
            },
            {
                "blankNumber": 7,
                "options": ["whim", "caprice", "fancy", "vagary"],
                "correctAnswer": "caprice" //
            },
            {
                "blankNumber": 8,
                "options": ["upkeep", "diligence", "vigilance", "maintenance"],
                "correctAnswer": "maintenance" //
            }
        ]
    },
    {
        "exerciseId": 17,
        "title": "THE ALLURE OF URBAN EXPLORATION",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Urban exploration, or 'urbex', is a burgeoning pastime that sees adventurers (1) ______ abandoned buildings, forgotten tunnels, and derelict industrial sites. Far from being mere vandalism, its proponents argue that it is about documenting decay and witnessing the hidden beauty in forgotten spaces. There's a certain (2) ______ to stepping into a place where time seems to have stood still, where the echoes of past lives still (3) ______ in the silent corridors. However, this pursuit is not without its (4) ______. Trespassing is often involved, and the dangers of collapsing structures, hazardous materials, and unforeseen obstacles are ever-present. Enthusiasts often operate with a strict code of ethics: \"take nothing but pictures, leave nothing but footprints.\" The appeal often lies in the thrill of discovery, the chance to (5) ______ off the beaten path, and the opportunity to glimpse a side of the urban landscape that few ever see. It’s a compelling blend of history, photography, and mild transgression, offering a unique (6) ______ on the relentless march of progress and its inevitable (7) ______. For some, it's a way to (8) ______ the past, for others, simply an exhilarating challenge.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["navigating", "traversing", "probing", "exploring"],
                "correctAnswer": "traversing" //
            },
            {
                "blankNumber": 2,
                "options": ["mystique", "enigma", "puzzle", "conundrum"],
                "correctAnswer": "mystique" //
            },
            {
                "blankNumber": 3,
                "options": ["linger", "persist", "remain", "endure"],
                "correctAnswer": "linger" //
            },
            {
                "blankNumber": 4,
                "options": ["pitfalls", "snags", "drawbacks", "impediments"],
                "correctAnswer": "pitfalls" //
            },
            {
                "blankNumber": 5,
                "options": ["veer", "swerve", "deviate", "diverge"],
                "correctAnswer": "deviate" //
            },
            {
                "blankNumber": 6,
                "options": ["perspective", "outlook", "viewpoint", "angle"],
                "correctAnswer": "perspective" //
            },
            {
                "blankNumber": 7,
                "options": ["dereliction", "dilapidation", "decay", "ruin"],
                "correctAnswer": "decay" //
            },
            {
                "blankNumber": 8,
                "options": ["re-establish", "reconnect with", "rekindle", "reinstate"],
                "correctAnswer": "reconnect with" //
            }
        ]
    },
    {
        "exerciseId": 18,
        "title": "THE COMPLEXITIES OF ETHICAL AI",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The rapid (1) ______ of Artificial Intelligence presents a myriad of ethical dilemmas that humanity is only just beginning to (2) ______. As AI becomes more sophisticated, capable of making autonomous decisions and even exhibiting forms of learning, questions about accountability, bias, and control come sharply into (3) ______. One significant concern is the potential for AI systems to (4) ______ existing societal biases if they are trained on data that reflects those biases. This could lead to discriminatory outcomes in areas like hiring, lending, or even criminal justice. Moreover, the 'black box' nature of some advanced AI models, where their decision-making processes are opaque, makes it challenging to (5) ______ responsibility when things go awry. Regulators and ethicists are grappling with how to (6) ______ frameworks that can guide the development and deployment of AI in a responsible manner. The goal is to (7) ______ the immense potential of AI for good, while simultaneously safeguarding against its inherent risks. It requires a nuanced understanding and a proactive (8) ______ to ensure that technological advancement serves humanity's best interests.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["proliferation", "expansion", "surge", "outburst"],
                "correctAnswer": "proliferation" //
            },
            {
                "blankNumber": 2,
                "options": ["contemplate", "grapple with", "ponder", "deliberate"],
                "correctAnswer": "grapple with" //
            },
            {
                "blankNumber": 3,
                "options": ["focus", "view", "light", "perspective"],
                "correctAnswer": "light" //
            },
            {
                "blankNumber": 4,
                "options": [" perpetuate", "sustain", "maintain", "uphold"],
                "correctAnswer": "perpetuate" //
            },
            {
                "blankNumber": 5,
                "options": ["assign", "attribute", "allocate", "impute"],
                "correctAnswer": "assign" //
            },
            {
                "blankNumber": 6,
                "options": ["devise", "formulate", "contrive", "concoct"],
                "correctAnswer": "formulate" //
            },
            {
                "blankNumber": 7,
                "options": ["harness", "leverage", "exploit", "utilise"],
                "correctAnswer": "harness" //
            },
            {
                "blankNumber": 8,
                "options": ["stance", "approach", "way", "method"],
                "correctAnswer": "approach" //
            }
        ]
    },
    {
        "exerciseId": 19,
        "title": "THE QUEST FOR LONGEVITY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Humanity's enduring (1) ______ with mortality has spurred countless investigations into the secrets of longevity. From ancient alchemists seeking the elixir of life to modern biotechnologists (2) ______ the human genome, the quest to prolong life has taken many forms. While the idea of eternal youth remains largely in the (3) ______ of science fiction, significant strides are being made in understanding the ageing process itself. Researchers are increasingly focusing on 'healthspan' – the period of life spent in good health – rather than just 'lifespan'. Dietary (4) ______, regular exercise, and stress reduction are widely acknowledged as crucial factors, but emerging fields like epigenetics and senolytics offer new (5) ______ for intervention. The ethical implications of radical life extension are also being increasingly (6) ______, raising questions about resource allocation, social equity, and the very definition of what it means to be human. Whether we are on the (7) ______ of a new era where extended lifespans are commonplace remains to be seen, but the scientific community is undoubtedly on a (8) ______ to unlock the mysteries of ageing.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["preoccupation", "obsession", "fascination", "engrossment"],
                "correctAnswer": "preoccupation" //
            },
            {
                "blankNumber": 2,
                "options": ["dissecting", "scrutinizing", "analysing", "delving"],
                "correctAnswer": "analysing" //
            },
            {
                "blankNumber": 3,
                "options": ["domain", "realm", "sphere", "territory"],
                "correctAnswer": "realm" //
            },
            {
                "blankNumber": 4,
                "options": ["regimes", "patterns", "practices", "habits"],
                "correctAnswer": "regimes" //
            },
            {
                "blankNumber": 5,
                "options": ["avenues", "paths", "routes", "directions"],
                "correctAnswer": "avenues" //
            },
            {
                "blankNumber": 6,
                "options": ["contemplated", "debated", "discussed", "considered"],
                "correctAnswer": "debated" //
            },
            {
                "blankNumber": 7,
                "options": ["cusp", "edge", "brink", "verge"],
                "correctAnswer": "cusp" //
            },
            {
                "blankNumber": 8,
                "options": ["mission", "quest", "pursuit", "expedition"],
                "correctAnswer": "quest" //
            }
        ]
    },
    {
        "exerciseId": 20,
        "title": "THE RESILIENCE OF CULTURES",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Cultures, far from being static entities, are constantly evolving, adapting, and transforming. Throughout history, various civilizations have faced internal pressures and external (1) ______, yet many have displayed a remarkable (2) ______ to endure. This resilience often stems from a deeply (3) ______ sense of identity, shared values, and a collective memory that transcends individual generations. While globalisation sometimes raises fears of cultural (4) ______, it can also act as a catalyst for cultural resurgence, as communities strive to preserve their unique heritage in the face of widespread homogeneity. The transmission of traditions, languages, and artistic forms across generations is crucial, often through informal channels and community (5) ______. However, the modern world also (6) ______ new challenges, such as the rapid pace of technological change and the pervasive influence of mass media. Ensuring the vitality of diverse cultures requires not just preservation, but also adaptation and innovation, allowing them to (7) ______ and thrive in ever-changing circumstances. It is a testament to the human spirit's capacity to (8) ______ its roots while embracing the future.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["aggressions", "encroachments", "incursions", "assaults"],
                "correctAnswer": "encroachments" //
            },
            {
                "blankNumber": 2,
                "options": ["propensity", "capacity", "aptitude", "inclination"],
                "correctAnswer": "capacity" //
            },
            {
                "blankNumber": 3,
                "options": ["ingrained", "embedded", "rooted", "entrenched"],
                "correctAnswer": "ingrained" //
            },
            {
                "blankNumber": 4,
                "options": ["dilution", "erosion", "dissipation", "weakening"],
                "correctAnswer": "erosion" //
            },
            {
                "blankNumber": 5,
                "options": ["gatherings", "rituals", "interactions", "networks"],
                "correctAnswer": "networks" //
            },
            {
                "blankNumber": 6,
                "options": ["poses", "presents", "brings", "offers"],
                "correctAnswer": "presents" //
            },
            {
                "blankNumber": 7,
                "options": ["flourish", "prosper", "blossom", "burgeon"],
                "correctAnswer": "flourish" //
            },
            {
                "blankNumber": 8,
                "options": ["honour", "revere", "uphold", "cherish"],
                "correctAnswer": "cherish" //
            }
        ]
    },
    {
        "exerciseId": 21,
        "title": "THE ART OF DEBATE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Debate, at its heart, is not merely about winning an argument, but about the rigorous (1) ______ of ideas and the pursuit of reasoned discourse. A truly effective debater must possess not only a sound grasp of their subject matter but also the ability to (2) ______ their arguments with clarity and conviction. This involves constructing a coherent (3) ______ of logic, anticipating counter-arguments, and gracefully responding to challenges. Far from being a chaotic free-for-all, formal debate adheres to strict rules and protocols, ensuring that all participants have an equal (4) ______ to be heard. The ultimate goal is to persuade, not to compel, and this requires a nuanced understanding of rhetoric and an ability to (5) ______ with the audience. While impassioned delivery can certainly be a powerful tool, it must always be (6) ______ by substantive content. Learning to debate (7) ______ critical thinking, research skills, and public speaking abilities, making it an invaluable exercise for anyone seeking to (8) ______ their intellectual acumen.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["scrutiny", "examination", "dissection", "analysis"],
                "correctAnswer": "scrutiny" //
            },
            {
                "blankNumber": 2,
                "options": ["articulate", "express", "convey", "enunciate"],
                "correctAnswer": "articulate" //
            },
            {
                "blankNumber": 3,
                "options": ["framework", "structure", "edifice", "scaffolding"],
                "correctAnswer": "framework" //
            },
            {
                "blankNumber": 4,
                "options": ["chance", "turn", "opportunity", "shot"],
                "correctAnswer": "opportunity" //
            },
            {
                "blankNumber": 5,
                "options": ["resonate", "connect", "empathise", "rapport"],
                "correctAnswer": "resonate" //
            },
            {
                "blankNumber": 6,
                "options": ["underpinned", "supported", "reinforced", "bolstered"],
                "correctAnswer": "underpinned" //
            },
            {
                "blankNumber": 7,
                "options": ["cultivates", "fosters", "develops", "nurtures"],
                "correctAnswer": "fosters" //
            },
            {
                "blankNumber": 8,
                "options": ["sharpen", "hone", "refine", "polish"],
                "correctAnswer": "hone" //
            }
        ]
    },
    {
        "exerciseId": 22,
        "title": "THE POWER OF SILENCE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "In an increasingly noisy and interconnected world, the profound power of silence is often (1) ______. Far from being merely the absence of sound, silence can be a potent force for introspection, creativity, and spiritual (2) ______. In many philosophical traditions, periods of quiet contemplation are considered (3) ______ for achieving clarity of thought and emotional balance. Modern life, however, seems almost designed to (4) ______ any opportunity for genuine stillness. The constant (5) ______ of notifications, background chatter, and endless media consumption leaves little room for the mind to wander freely and process experiences. Yet, finding moments of quiet can (6) ______ unexpected benefits, from improved focus and reduced stress to enhanced problem-solving abilities. It allows us to truly (7) ______ with our inner selves, to hear the subtle promptings that are often (8) ______ out by the cacophony of daily existence. Reclaiming silence is not about retreating from the world, but rather about enriching our engagement with it.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["overlooked", "disregarded", "ignored", "missed"],
                "correctAnswer": "overlooked" //
            },
            {
                "blankNumber": 2,
                "options": ["enlightenment", "revelation", "awakening", "insight"],
                "correctAnswer": "enlightenment" //
            },
            {
                "blankNumber": 3,
                "options": ["imperative", "indispensable", "essential", "crucial"],
                "correctAnswer": "essential" //
            },
            {
                "blankNumber": 4,
                "options": ["obviate", "preclude", "inhibit", "impede"],
                "correctAnswer": "preclude" //
            },
            {
                "blankNumber": 5,
                "options": ["barrage", "onslaught", "deluge", "torrent"],
                "correctAnswer": "barrage" //
            },
            {
                "blankNumber": 6,
                "options": ["yield", "afford", "render", "bestow"],
                "correctAnswer": "yield" //
            },
            {
                "blankNumber": 7,
                "options": ["commune", "connect", "interact", "correspond"],
                "correctAnswer": "commune" //
            },
            {
                "blankNumber": 8,
                "options": ["drowned", "muffled", "stifled", "subdued"],
                "correctAnswer": "drowned" //
            }
        ]
    },
    {
        "exerciseId": 23,
        "title": "THE MARVEL OF MIGRATION",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The annual migration of millions of animals across continents and oceans is one of nature's most extraordinary (1) ______. From the delicate journey of monarch butterflies to the epic (2) ______ of wildebeest across the Serengeti, these movements are a testament to the intricate (3) ______ of the natural world. Driven by an innate (4) ______ to seasonal changes, food availability, and breeding cycles, these creatures undertake arduous journeys, often overcoming immense obstacles. The sheer scale and precision of these migrations continue to (5) ______ scientists, who are constantly discovering new facets of animal navigation and communal behaviour. Whether guided by the Earth's magnetic field, celestial cues, or olfactory memory, the animals exhibit an astonishing capacity for orientation. Yet, these ancient routes and rhythms are increasingly under (6) ______ from human activity, including habitat loss, climate change, and barriers to movement. Conservation efforts are crucial to (7) ______ the delicate balance that allows these incredible journeys to continue, ensuring that future generations can still (8) ______ in the spectacle of migration.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["spectacles", "displays", "shows", "exhibitions"],
                "correctAnswer": "spectacles" //
            },
            {
                "blankNumber": 2,
                "options": ["trek", "odyssey", "journey", "expedition"],
                "correctAnswer": "trek" //
            },
            {
                "blankNumber": 3,
                "options": ["tapestry", "weave", "fabric", "mesh"],
                "correctAnswer": "tapestry" //
            },
            {
                "blankNumber": 4,
                "options": ["response", "reaction", "susceptibility", "sensitivity"],
                "correctAnswer": "response" //
            },
            {
                "blankNumber": 5,
                "options": ["perplex", "mystify", "confound", "baffle"],
                "correctAnswer": "confound" //
            },
            {
                "blankNumber": 6,
                "options": ["siege", "assault", "threat", "pressure"],
                "correctAnswer": "threat" //
            },
            {
                "blankNumber": 7,
                "options": ["preserve", "maintain", "safeguard", "secure"],
                "correctAnswer": "safeguard" //
            },
            {
                "blankNumber": 8,
                "options": ["revel", "delight", "rejoice", "exult"],
                "correctAnswer": "revel" //
            }
        ]
    },
    {
        "exerciseId": 24,
        "title": "THE EVOLUTION OF LANGUAGE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Language, the cornerstone of human communication, is a dynamic entity, constantly in a state of (1) ______. Far from being static, it (2) ______ and transforms over time, reflecting changes in society, technology, and culture. New words are coined, old ones (3) ______ into disuse, and meanings subtly shift, often without conscious awareness. This organic process is driven by myriad factors, from the informal (4) ______ of slang among youth to the formal pronouncements of academic institutions. The historical (5) ______ of languages reveals fascinating insights into human migration, cultural exchange, and cognitive development. While some lament the 'corruption' of language through modern usage, linguists often (6) ______ this as a natural and inevitable part of its vitality. The ability of language to adapt and (7) ______ is precisely what allows it to remain a powerful tool for expressing complex ideas and fostering shared understanding. It is a living testament to humanity's capacity for innovation and its incessant (8) ______ to articulate the world around it.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["flux", "change", "motion", "flow"],
                "correctAnswer": "flux" //
            },
            {
                "blankNumber": 2,
                "options": ["mutates", "alters", "modifies", "evolves"],
                "correctAnswer": "evolves" //
            },
            {
                "blankNumber": 3,
                "options": ["fall", "drop", "fade", "slip"],
                "correctAnswer": "fall" //
            },
            {
                "blankNumber": 4,
                "options": ["proliferation", "spread", "dissemination", "propagation"],
                "correctAnswer": "spread" //
            },
            {
                "blankNumber": 5,
                "options": ["trajectory", "progression", "lineage", "ancestry"],
                "correctAnswer": "lineage" //
            },
            {
                "blankNumber": 6,
                "options": ["regard", "perceive", "view", "consider"],
                "correctAnswer": "regard" //
            },
            {
                "blankNumber": 7,
                "options": ["regenerate", "revitalise", "renew", "rejuvenate"],
                "correctAnswer": "regenerate" //
            },
            {
                "blankNumber": 8,
                "options": ["endeavour", "quest", "striving", "struggle"],
                "correctAnswer": "endeavour" //
            }
        ]
    },
    {
        "exerciseId": 25,
        "title": "THE PSYCHOLOGY OF DECISION-MAKING",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Decision-making, a seemingly straightforward process, is in fact a complex interplay of cognitive biases, emotions, and external (1) ______. From mundane daily choices to life-altering dilemmas, our minds are constantly (2) ______ information and weighing options. Psychologists have long been (3) ______ by the various heuristics and shortcuts the brain employs, which often lead to predictable patterns of irrationality. Confirmation bias, for example, can (4) ______ us to seek out information that supports our existing beliefs, while anchoring effects can unduly influence our judgements. Understanding these cognitive (5) ______ is crucial, not to eliminate them entirely, but to become more aware of their influence. Furthermore, emotions play a significant (6) ______; fear can lead to risk aversion, while excitement might (7) ______ rash actions. Ultimately, while we strive for rational decisions, the reality is that our choices are often a product of an intricate, subconscious negotiation. Developing a more astute awareness of these underlying mechanisms can help us to (8) ______ more informed and effective decisions.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["stimuli", "impulses", "cues", "triggers"],
                "correctAnswer": "stimuli" //
            },
            {
                "blankNumber": 2,
                "options": ["assimilating", "processing", "integrating", "absorbing"],
                "correctAnswer": "processing" //
            },
            {
                "blankNumber": 3,
                "options": ["intrigued", "captivated", "fascinated", "engrossed"],
                "correctAnswer": "fascinated" //
            },
            {
                "blankNumber": 4,
                "options": ["predispose", "incline", "sway", "prompt"],
                "correctAnswer": "predispose" //
            },
            {
                "blankNumber": 5,
                "options": ["quirks", "peculiarities", "foibles", "biases"],
                "correctAnswer": "biases" //
            },
            {
                "blankNumber": 6,
                "options": ["part", "role", "factor", "hand"],
                "correctAnswer": "role" //
            },
            {
                "blankNumber": 7,
                "options": ["precipitate", "instigate", "incite", "provoke"],
                "correctAnswer": "precipitate" //
            },
            {
                "blankNumber": 8,
                "options": ["arrive", "reach", "make", "render"],
                "correctAnswer": "make" //
            }
        ]
    },
    {
        "exerciseId": 26,
        "title": "THE EVOLUTION OF WORK",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The nature of work has undergone a profound (1) ______ over millennia, from agrarian societies to the digital age. What was once predominantly manual labour has gradually (2) ______ into knowledge-based economies, driven by innovation and technology. The concept of a 'job for life' has largely been (3) ______ to history, replaced by a more fluid and dynamic career landscape where adaptability is (4) ______. Automation and Artificial Intelligence are now poised to (5) ______ even more transformative changes, potentially displacing certain jobs while creating entirely new ones. This necessitates a constant (6) ______ of skills and a willingness to embrace lifelong learning. The traditional nine-to-five office model is also being increasingly (7) ______ by remote work and flexible arrangements, altering the very fabric of professional life. Navigating this evolving terrain requires individuals to be proactive, to cultivate a versatile skill set, and to remain (8) ______ to new opportunities. The future of work is not a fixed destination, but a continuous journey of reinvention.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["metamorphosis", "transformation", "alteration", "conversion"],
                "correctAnswer": "transformation" //
            },
            {
                "blankNumber": 2,
                "options": ["transitioned", "shifted", "progressed", "moved"],
                "correctAnswer": "transitioned" //
            },
            {
                "blankNumber": 3,
                "options": ["consigned", "relegated", "committed", "dismissed"],
                "correctAnswer": "relegated" //
            },
            {
                "blankNumber": 4,
                "options": ["paramount", "supreme", "cardinal", "crucial"],
                "correctAnswer": "paramount" //
            },
            {
                "blankNumber": 5,
                "options": ["effect", "bring", "instigate", "trigger"],
                "correctAnswer": "instigate" //
            },
            {
                "blankNumber": 6,
                "options": ["upgrading", "updating", "refining", "retraining"],
                "correctAnswer": "retraining" //
            },
            {
                "blankNumber": 7,
                "options": ["challenged", "undermined", "subverted", "disrupted"],
                "correctAnswer": "disrupted" //
            },
            {
                "blankNumber": 8,
                "options": ["attuned", "alert", "responsive", "sensitive"],
                "correctAnswer": "attuned" //
            }
        ]
    },
    {
        "exerciseId": 27,
        "title": "THE SEDUCTION OF ADVERTISING",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Advertising, in its myriad forms, is a pervasive force in modern society, constantly (1) ______ for our attention. Far from being a simple means of conveying information, it is a sophisticated art form that seeks to (2) ______ desires, shape perceptions, and ultimately, drive consumption. Through a potent (3) ______ of psychology, aesthetics, and targeted messaging, advertisers aim to create an emotional connection with their audience. They often (4) ______ on aspirational lifestyles, tapping into our innate longing for status, happiness, or belonging. The most effective campaigns are those that don't just sell a product, but rather a compelling narrative or an (5) ______ of what life could be like. However, the omnipresence of advertising also (6) ______ ethical questions, particularly concerning its potential to manipulate and to foster materialism. As consumers, developing a critical (7) ______ to the subtle techniques employed by advertisers is crucial. It allows us to differentiate between genuine need and commercially (8) ______ desire, fostering a more conscious approach to consumption.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["vying", "competing", "contending", "struggling"],
                "correctAnswer": "vying" //
            },
            {
                "blankNumber": 2,
                "options": ["cultivate", "foster", "nurture", "instil"],
                "correctAnswer": "cultivate" //
            },
            {
                "blankNumber": 3,
                "options": ["blend", "concoction", "fusion", "amalgam"],
                "correctAnswer": "blend" //
            },
            {
                "blankNumber": 4,
                "options": ["capitalise", "exploit", "draw", "prey"],
                "correctAnswer": "capitalise" //
            },
            {
                "blankNumber": 5,
                "options": ["illusion", "fantasy", "vision", "dream"],
                "correctAnswer": "vision" //
            },
            {
                "blankNumber": 6,
                "options": ["raises", "poses", "brings", "presents"],
                "correctAnswer": "poses" //
            },
            {
                "blankNumber": 7,
                "options": ["discerning", "critical", "shrewd", "astute"],
                "correctAnswer": "critical" //
            },
            {
                "blankNumber": 8,
                "options": ["induced", "stimulated", "prompted", "generated"],
                "correctAnswer": "induced" //
            }
        ]
    },
    {
        "exerciseId": 28,
        "title": "THE MYSTERY OF DREAMS",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Dreams, those enigmatic narratives that (1) ______ our slumber, have fascinated humanity since time immemorial. From ancient shamans interpreting their meaning to modern neuroscientists (2) ______ their biological underpinnings, the mystery of why we dream persists. While some theories (3) ______ dreams to mere random neural firings, others (4) ______ them with profound psychological significance, viewing them as a window into the subconscious mind. Jungian psychology, for instance, proposes that dreams are rich with archetypal symbolism, offering insights into our deepest fears and aspirations. The very act of dreaming can be a (5) ______ for problem-solving, allowing the mind to process information and make connections unhindered by conscious constraints. Despite the extensive research, much about dreams remains a (6) ______ enigma. Why certain themes recur, why some dreams are vivid and others elusive, and what their ultimate purpose (7) ______ remains a subject of ongoing debate and speculation. It is a reminder that even within the confines of our own minds, there are vast, unexplored (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["permeate", "pervade", "infiltrate", "suffuse"],
                "correctAnswer": "pervade" //
            },
            {
                "blankNumber": 2,
                "options": ["unravelling", "dissecting", "probing", "exploring"],
                "correctAnswer": "probing" //
            },
            {
                "blankNumber": 3,
                "options": ["attribute", "ascribe", "impute", "credit"],
                "correctAnswer": "attribute" //
            },
            {
                "blankNumber": 4,
                "options": ["imbue", "invest", "endow", "infuse"],
                "correctAnswer": "invest" //
            },
            {
                "blankNumber": 5,
                "options": ["catalyst", "impetus", "spur", "stimulant"],
                "correctAnswer": "catalyst" //
            },
            {
                "blankNumber": 6,
                "options": ["perplexing", "baffling", "confounding", "bewildering"],
                "correctAnswer": "perplexing" //
            },
            {
                "blankNumber": 7,
                "options": ["entails", "comprises", "constitutes", "signifies"],
                "correctAnswer": "entails" //
            },
            {
                "blankNumber": 8,
                "options": ["frontiers", "territories", "realms", "domains"],
                "correctAnswer": "domains" //
            }
        ]
    },
    {
        "exerciseId": 29,
        "title": "THE CHALLENGE OF SUSTAINABILITY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Achieving true sustainability is perhaps the most pressing (1) ______ facing humanity in the 21st century. It (2) ______ a delicate balance between meeting the needs of the present without compromising the ability of future generations to meet their own needs. The relentless (3) ______ on finite natural resources, coupled with the escalating climate crisis, has brought the issue into sharp (4) ______. Transitioning to a sustainable future (5) ______ a paradigm shift in our economic models, consumption patterns, and technological approaches. It is not merely about mitigating environmental damage, but also about fostering social equity and economic viability. Businesses are increasingly being called upon to (6) ______ sustainable practices into their core operations, moving beyond mere corporate social responsibility. Consumers, too, have a vital (7) ______ to play through their purchasing choices and advocacy. The path to sustainability is undoubtedly arduous, fraught with complex trade-offs and competing interests, yet it is a (8) ______ that we cannot afford to postpone.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["conundrum", "dilemma", "predicament", "challenge"],
                "correctAnswer": "challenge" //
            },
            {
                "blankNumber": 2,
                "options": ["entails", "requires", "involves", "predicates"],
                "correctAnswer": "entails" //
            },
            {
                "blankNumber": 3,
                "options": ["drain", "depletion", "exhaustion", "erosion"],
                "correctAnswer": "depletion" //
            },
            {
                "blankNumber": 4,
                "options": ["relief", "focus", "contrast", "perspective"],
                "correctAnswer": "focus" //
            },
            {
                "blankNumber": 5,
                "options": ["demands", "necessitates", "calls for", "compels"],
                "correctAnswer": "calls for" //
            },
            {
                "blankNumber": 6,
                "options": ["embed", "integrate", "incorporate", "weave"],
                "correctAnswer": "integrate" //
            },
            {
                "blankNumber": 7,
                "options": ["part", "role", "share", "hand"],
                "correctAnswer": "role" //
            },
            {
                "blankNumber": 8,
                "options": ["imperative", "necessity", "urgency", "exigency"],
                "correctAnswer": "imperative" //
            }
        ]
    },
    {
        "exerciseId": 30,
        "title": "THE APPEAL OF MINIMALISM",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "In an age of relentless consumption and material (1) ______, the philosophy of minimalism has gained considerable (2) ______. It advocates for a deliberate reduction of possessions and commitments, aiming to declutter not just physical spaces, but also the mind. Proponents argue that by shedding the superfluous, one can gain greater clarity, focus, and a deeper (3) ______ of what truly matters. This often involves a rigorous (4) ______ of one's belongings, questioning the necessity and utility of each item. Far from being a doctrine of deprivation, minimalism is often (5) ______ as a pathway to greater freedom and intentionality. It encourages a shift from accumulating 'stuff' to investing in experiences, relationships, and personal growth. While the aesthetic of minimalist living can be visually (6) ______, its core tenets extend beyond mere design, (7) ______ a fundamental rethinking of our relationship with consumer culture. It is a compelling counter-narrative to the prevailing ethos of more, offering a refreshing (8) ______ on how to live a richer, more meaningful life.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["abundance", "profusion", "surfeit", "glut"],
                "correctAnswer": "abundance" //
            },
            {
                "blankNumber": 2,
                "options": ["traction", "momentum", "currency", "sway"],
                "correctAnswer": "traction" //
            },
            {
                "blankNumber": 3,
                "options": ["appreciation", "discernment", "comprehension", "grasp"],
                "correctAnswer": "appreciation" //
            },
            {
                "blankNumber": 4,
                "options": ["appraisal", "assessment", "evaluation", "scrutiny"],
                "correctAnswer": "scrutiny" //
            },
            {
                "blankNumber": 5,
                "options": ["framed", "portrayed", "depicted", "presented"],
                "correctAnswer": "framed" //
            },
            {
                "blankNumber": 6,
                "options": ["appealing", "striking", "captivating", "engaging"],
                "correctAnswer": "striking" //
            },
            {
                "blankNumber": 7,
                "options": ["implying", "denoting", "signifying", "entailing"],
                "correctAnswer": "entailing" //
            },
            {
                "blankNumber": 8,
                "options": ["viewpoint", "outlook", "perspective", "angle"],
                "correctAnswer": "perspective" //
            }
        ]
    },
    {
        "exerciseId": 31,
        "title": "THE LURE OF THE UNKNOWN",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Humanity has an innate (1) ______ for exploration, a relentless drive to (2) ______ the limits of our knowledge and venture into the unknown. From ancient navigators charting uncharted seas to modern astrophysicists probing the far (3) ______ of the cosmos, this impulse has driven discovery and innovation. It is often fueled by a profound sense of (4) ______ and a desire to comprehend the mysteries that lie beyond our current grasp. The very act of venturing into the unfamiliar can be exhilarating, pushing the (5) ______ of human endurance and ingenuity. While the tangible rewards of exploration might include new resources or scientific breakthroughs, the intangible benefits are equally (6) ______: a broadened perspective, a deeper understanding of our place in the universe, and the sheer thrill of discovery. This inherent curiosity is what (7) ______ us apart, prompting us to constantly question, investigate, and push beyond existing paradigms. The unknown, far from being a void, is a fertile (8) ______ for innovation and profound insight.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["yearning", "longing", "appetite", "craving"],
                "correctAnswer": "yearning" //
            },
            {
                "blankNumber": 2,
                "options": ["push", "extend", "stretch", "expand"],
                "correctAnswer": "stretch" //
            },
            {
                "blankNumber": 3,
                "options": ["reaches", "bounds", "fringe", "confines"],
                "correctAnswer": "reaches" //
            },
            {
                "blankNumber": 4,
                "options": ["wonder", "awe", "marvel", "astonishment"],
                "correctAnswer": "wonder" //
            },
            {
                "blankNumber": 5,
                "options": ["boundaries", "frontiers", "edges", "borders"],
                "correctAnswer": "boundaries" //
            },
            {
                "blankNumber": 6,
                "options": ["compelling", "persuasive", "forceful", "potent"],
                "correctAnswer": "potent" //
            },
            {
                "blankNumber": 7,
                "options": ["sets", "distinguishes", "marks", "divides"],
                "correctAnswer": "sets" //
            },
            {
                "blankNumber": 8,
                "options": ["ground", "terrain", "realm", "field"],
                "correctAnswer": "realm" //
            }
        ]
    },
    {
        "exerciseId": 32,
        "title": "THE DYNAMICS OF FRIENDSHIP",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Friendship, a cornerstone of human existence, is a multifaceted bond that (1) ______ our lives in myriad ways. It is a relationship based on mutual trust, shared experiences, and a profound sense of (2) ______. Unlike familial ties, friendships are largely (3) ______ – we choose our friends based on compatibility, shared interests, and reciprocal support. The dynamics of friendship can vary immensely, from casual acquaintances to deep, lifelong connections that (4) ______ the test of time. True friends offer a unique blend of empathy, honesty, and unwavering loyalty, providing a vital (5) ______ system in times of both triumph and adversity. While modern life, with its demands and distractions, can sometimes (6) ______ the maintenance of these bonds, the effort invested in nurturing friendships is almost always (7) ______. They offer a unique mirror through which we can better understand ourselves and navigate the complexities of life. Ultimately, friendships are a testament to our inherent need for connection and the profound richness that shared human (8) ______ brings.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["enriches", "enhances", "augments", "fortifies"],
                "correctAnswer": "enriches" //
            },
            {
                "blankNumber": 2,
                "options": ["camaraderie", "fellowship", "kinship", "affinity"],
                "correctAnswer": "camaraderie" //
            },
            {
                "blankNumber": 3,
                "options": ["voluntary", "elective", "optional", "discretionary"],
                "correctAnswer": "voluntary" //
            },
            {
                "blankNumber": 4,
                "options": ["endure", "withstand", "weather", "brave"],
                "correctAnswer": "weather" //
            },
            {
                "blankNumber": 5,
                "options": ["support", "bolster", "brace", "buttress"],
                "correctAnswer": "support" //
            },
            {
                "blankNumber": 6,
                "options": ["imped", "hinder", "obstruct", "hamper"],
                "correctAnswer": "imped" //
            },
            {
                "blankNumber": 7,
                "options": ["repaid", "compensated", "remunerated", "requited"],
                "correctAnswer": "repaid" //
            },
            {
                "blankNumber": 8,
                "options": ["rapport", "communion", "bond", "solidarity"],
                "correctAnswer": "communion" //
            }
        ]
    },
    {
        "exerciseId": 33,
        "title": "THE PURSUIT OF MASTERY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The pursuit of mastery in any field is a journey that (1) ______ discipline, perseverance, and an unwavering commitment to continuous improvement. It is a process of deliberate practice, where individuals (2) ______ their skills, hone their techniques, and constantly strive to (3) ______ their previous best. Far from being an innate talent, mastery is often the (4) ______ of countless hours of dedicated effort, marked by both triumphs and setbacks. This relentless (5) ______ of excellence requires a high degree of self-awareness, an openness to feedback, and the resilience to learn from mistakes. Whether in the arts, sciences, or sports, true masters possess an uncanny ability to (6) ______ complexity, seeing patterns and connections that elude others. They are not content with merely achieving competence; their ambition is to reach the (7) ______ of their chosen domain. This lifelong dedication to refinement is what ultimately (8) ______ them from those who merely dabble, transforming potential into profound expertise.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["demands", "requires", "necessitates", "stipulates"],
                "correctAnswer": "requires" //
            },
            {
                "blankNumber": 2,
                "options": ["refine", "perfect", "polish", "sharpen"],
                "correctAnswer": "refine" //
            },
            {
                "blankNumber": 3,
                "options": ["supersede", "surpass", "transcend", "outdo"],
                "correctAnswer": "surpass" //
            },
            {
                "blankNumber": 4,
                "options": ["culmination", "product", "result", "outcome"],
                "correctAnswer": "product" //
            },
            {
                "blankNumber": 5,
                "options": ["quest", "pursuit", "striving", "endeavour"],
                "correctAnswer": "quest" //
            },
            {
                "blankNumber": 6,
                "options": ["decipher", "unravel", "apprehend", "discern"],
                "correctAnswer": "discern" //
            },
            {
                "blankNumber": 7,
                "options": ["pinnacle", "apex", "zenith", "acme"],
                "correctAnswer": "pinnacle" //
            },
            {
                "blankNumber": 8,
                "options": ["sets", "differentiates", "distinguishes", "marks"],
                "correctAnswer": "distinguishes" //
            }
        ]
    },
    {
        "exerciseId": 34,
        "title": "THE EVANESCENCE OF MEMORY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Memory, that seemingly steadfast repository of our past, is in fact a surprisingly (1) ______ and reconstructive faculty. Far from being a precise recording, our recollections are often (2) ______ by current emotions, subsequent experiences, and even the act of recall itself. This inherent malleability means that memories are not simply retrieved, but actively (3) ______ each time they are accessed. Psychologists have long been (4) ______ by the various distortions and biases that can (5) ______ our memories, leading to vivid but inaccurate accounts. The phenomenon of 'false memories', where individuals genuinely believe they remember events that never occurred, further (6) ______ the fragility of our cognitive archives. While unsettling, this reconstructive nature of memory also serves an adaptive purpose, allowing us to update our understanding of the past in light of new information. Understanding the inherent (7) ______ of memory is crucial, both for personal introspection and in fields like law and history, where the (8) ______ of recollection is paramount.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["pliable", "plastic", "malleable", "ductile"],
                "correctAnswer": "malleable" //
            },
            {
                "blankNumber": 2,
                "options": ["coloured", "tinged", "biased", "influenced"],
                "correctAnswer": "coloured" //
            },
            {
                "blankNumber": 3,
                "options": ["reformed", "remodelled", "rebuilt", "reshaped"],
                "correctAnswer": "reshaped" //
            },
            {
                "blankNumber": 4,
                "options": ["perplexed", "intrigued", "baffled", "mystified"],
                "correctAnswer": "intrigued" //
            },
            {
                "blankNumber": 5,
                "options": ["afflict", "impair", "compromise", "corrupt"],
                "correctAnswer": "compromise" //
            },
            {
                "blankNumber": 6,
                "options": ["underscores", "highlights", "emphasizes", "accentuates"],
                "correctAnswer": "underscores" //
            },
            {
                "blankNumber": 7,
                "options": ["fallibility", "imperfection", "frailty", "flaw"],
                "correctAnswer": "fallibility" //
            },
            {
                "blankNumber": 8,
                "options": ["veracity", "accuracy", "authenticity", "fidelity"],
                "correctAnswer": "accuracy" //
            }
        ]
    },
    {
        "exerciseId": 35,
        "title": "URBAN SUSTAINABILITY INITIATIVES",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Rapid urbanization has prompted cities to implement (1) ______ strategies aimed at reducing congestion and pollution. Urban planners advocate for (2) ______ corridors that prioritize public transit and nonmotorized mobility, yet funding remains a (3) ______ obstacle. While some municipalities have piloted (4) ______ programs promoting car‐free zones during peak hours, critics argue such measures can be (5) ______ to small businesses reliant on vehicular traffic. To ensure long‐term success, effective policies must (6) ______ community input and foster a sense of (7) ______ among residents. Otherwise, ambitious plans risk being dismissed as mere (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["peremptory", "holistic", "myopic", "spurious"],
                "correctAnswer": "holistic" //
            },
            {
                "blankNumber": 2,
                "options": ["transect", "clandestine", "perfunctory", "salutary"],
                "correctAnswer": "transect" //
            },
            {
                "blankNumber": 3,
                "options": ["negligible", "insuperable", "ephemeral", "conciliatory"],
                "correctAnswer": "insuperable" //
            },
            {
                "blankNumber": 4,
                "options": ["incendiary", "provisional", "inimical", "quixotic"],
                "correctAnswer": "quixotic" //
            },
            {
                "blankNumber": 5,
                "options": ["deleterious", "propitious", "innocuous", "ubiquitous"],
                "correctAnswer": "deleterious" //
            },
            {
                "blankNumber": 6,
                "options": ["obfuscate", "circumvent", "incorporate", "vitiate"],
                "correctAnswer": "incorporate" //
            },
            {
                "blankNumber": 7,
                "options": ["camaraderie", "despondency", "reprisal", "turpitude"],
                "correctAnswer": "camaraderie" //
            },
            {
                "blankNumber": 8,
                "options": ["panaceas", "capitulations", "homages", "impediments"],
                "correctAnswer": "panaceas" //
            }
        ]
    },
    {
        "exerciseId": 36,
        "title": "NEUROLOGICAL ASPECTS OF LANGUAGE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Recent research into aphasia has underscored the (1) ______ relationship between left‐hemisphere lesions and language production impairments. Neuroimaging reveals that even minor disruptions in Broca’s area can precipitate (2) ______ difficulties in syntax and phonology. However, some patients exhibit remarkable (3) ______, reestablishing linguistic competence through therapy that leverages neural (4) ______. In contrast, neglecting early intervention often (5) ______ recovery, leading to chronic deficits. Clinicians emphasize that a (6) ______ understanding of individual neuroplasticity can optimize rehabilitation plans and improve (7) ______ outcomes. These findings challenge the once (8) ______ notion that adult brains lack malleability.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["tenuous", "incontrovertible", "aberrant", "ephemeral"],
                "correctAnswer": "incontrovertible" //
            },
            {
                "blankNumber": 2,
                "options": ["recalcitrant", "sporadic", "pervasive", "oblique"],
                "correctAnswer": "pervasive" //
            },
            {
                "blankNumber": 3,
                "options": ["atrophy", "resilience", "vacillation", "apathy"],
                "correctAnswer": "resilience" //
            },
            {
                "blankNumber": 4,
                "options": ["modulations", "aberrations", "obfuscations", "emulations"],
                "correctAnswer": "modulations" //
            },
            {
                "blankNumber": 5,
                "options": ["engenders", "facilitates", "precludes", "vindicates"],
                "correctAnswer": "precludes" //
            },
            {
                "blankNumber": 6,
                "options": ["dogmatic", "cursory", "granular", "quixotic"],
                "correctAnswer": "granular" //
            },
            {
                "blankNumber": 7,
                "options": ["inauspicious", "salutary", "jejune", "clandestine"],
                "correctAnswer": "salutary" //
            },
            {
                "blankNumber": 8,
                "options": ["archaic", "salutary", "ubiquitous", "amenable"],
                "correctAnswer": "archaic" //
            }
        ]
    },
    {
        "exerciseId": 37,
        "title": "GLOBAL TRADE POLICIES",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Negotiations within the World Trade Organization often revolve around (1) ______ tariffs that can either stimulate economic growth or stifle competition. Developing nations frequently argue that high tariffs imposed by wealthier countries are (2) ______, perpetuating an imbalance in market access. Conversely, proponents of free trade maintain that reducing barriers can (3) ______ innovation and drive down consumer prices. Despite these assertions, critics contend that deregulation can be (4) ______, exposing local industries to predatory practices. Effective discourse requires a (5) ______ assessment of comparative advantage and consideration of socioeconomic (6) ______. Only through (7) ______ collaboration can member states forge agreements that are both equitable and (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["nominal", "exorbitant", "insipid", "gestational"],
                "correctAnswer": "exorbitant" //
            },
            {
                "blankNumber": 2,
                "options": ["salutary", "equitable", "pernicious", "effervescent"],
                "correctAnswer": "pernicious" //
            },
            {
                "blankNumber": 3,
                "options": ["stymie", "galvanize", "obviate", "exacerbate"],
                "correctAnswer": "galvanize" //
            },
            {
                "blankNumber": 4,
                "options": ["salutary", "deleterious", "innocuous", "transient"],
                "correctAnswer": "deleterious" //
            },
            {
                "blankNumber": 5,
                "options": ["myopic", "holistic", "insular", "perfidious"],
                "correctAnswer": "holistic" //
            },
            {
                "blankNumber": 6,
                "options": ["vicissitudes", "panacea", "rubric", "perfidy"],
                "correctAnswer": "vicissitudes" //
            },
            {
                "blankNumber": 7,
                "options": ["obstinate", "circumscribed", "collaborative", "recalcitrant"],
                "correctAnswer": "collaborative" //
            },
            {
                "blankNumber": 8,
                "options": ["inconsequential", "propitious", "quixotic", "apathetic"],
                "correctAnswer": "propitious" //
            }
        ]
    },
    {
        "exerciseId": 38,
        "title": "DIGITAL CULTURE AND IDENTITY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The rise of social media influencers has accelerated the (1) ______ between personal branding and authentic self‐expression. Some argue that curated online personas can be (2) ______, encouraging followers to emulate lifestyles divorced from reality. Nevertheless, others celebrate social media as a (3) ______ platform for marginalized voices, enabling users to (4) ______ dominant narratives. Unfortunately, the prevailing algorithmic models often (5) ______ visibility to sensational content, undermining substantive discourse. To foster a healthier digital ecosystem, developers propose incorporating (6) ______ metrics that prioritize community engagement over quantifiable metrics like “likes.” Achieving this balance requires a (7) ______ commitment to ethical design and constant (8) ______.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["schism", "equilibrium", "magnanimity", "verisimilitude"],
                "correctAnswer": "schism" //
            },
            {
                "blankNumber": 2,
                "options": ["facetious", "authentic", "pernicious", "quixotic"],
                "correctAnswer": "pernicious" //
            },
            {
                "blankNumber": 3,
                "options": ["quixotic", "salutary", "deleterious", "perfunctory"],
                "correctAnswer": "salutary" //
            },
            {
                "blankNumber": 4,
                "options": ["subvert", "venerate", "obfuscate", "capitulate"],
                "correctAnswer": "subvert" //
            },
            {
                "blankNumber": 5,
                "options": ["engender", "repudiate", "confin", "amplify"],
                "correctAnswer": "amplify" //
            },
            {
                "blankNumber": 6,
                "options": ["parochial", "heuristic", "ignominious", "venal"],
                "correctAnswer": "heuristic" //
            },
            {
                "blankNumber": 7,
                "options": ["desultory", "resolute", "fractious", "ignoble"],
                "correctAnswer": "resolute" //
            },
            {
                "blankNumber": 8,
                "options": ["vigilance", "indolence", "ennui", "apathy"],
                "correctAnswer": "vigilance" //
            }
        ]
    },
    {
        "exerciseId": 39,
        "title": "HUMAN RIGHTS ADVOCACY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Civil society organizations often rely on (1) ______ to draw attention to abuses and mobilize public opinion. Peaceful protests, document‐revelations, and strategic litigation can each (2) ______ repressive policies, yet activists frequently face (3) ______ backlash. In many authoritarian contexts, governments employ (4) ______ tactics such as internet shutdowns and arbitrary detentions to silence dissent. To counteract these measures, NGOs leverage (5) ______ networks that coordinate international pressure and secure asylum for at‐risk individuals. Nonetheless, sustainable progress demands addressing underlying (6) ______—economic inequality, social exclusion, and systemic corruption. Only then can efforts transcend symbolic victories and yield (7) ______ change. Despite formidable obstacles, advocates remain (8) ______ in their pursuit of justice.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["obfuscation", "advocacy", "atrophy", "caricature"],
                "correctAnswer": "advocacy" //
            },
            {
                "blankNumber": 2,
                "options": ["perpetuate", "galvanize", "obviate", "vitiate"],
                "correctAnswer": "galvanize" //
            },
            {
                "blankNumber": 3,
                "options": ["salutary", "perfidious", "unremitting", "ephemeral"],
                "correctAnswer": "unremitting" //
            },
            {
                "blankNumber": 4,
                "options": ["draconian", "innocuous", "gestural", "ephemeral"],
                "correctAnswer": "draconian" //
            },
            {
                "blankNumber": 5,
                "options": ["clandestine", "prodigious", "quixotic", "efficacious"],
                "correctAnswer": "clandestine" //
            },
            {
                "blankNumber": 6,
                "options": ["aori", "panaceas", "axioms", "anomalies"],
                "correctAnswer": "anomalies" //
            },
            {
                "blankNumber": 7,
                "options": ["ephemeral", "enduring", "myopic", "nominal"],
                "correctAnswer": "enduring" //
            },
            {
                "blankNumber": 8,
                "options": ["vacillating", "irrepressible", "prosaic", "inimical"],
                "correctAnswer": "irrepressible" //
            }
        ]
    },
    {
        "exerciseId": 40,
        "title": "CONTEMPORARY PHILOSOPHICAL DEBATES",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Postmodern theorists often (1) ______ grand narratives, arguing instead that knowledge is socially constructed and inherently (2) ______. This perspective can (3) ______ Enlightenment ideals of objective truth, prompting critics to label such critiques as (4) ______. Nonetheless, proponents maintain that deconstructing hegemonic discourses unveils hidden (5) ______ and fosters intellectual pluralism. In ethics, relativist positions assert that moral judgments are (6) ______ to cultural contexts, whereas universalists contend that certain values are (7) ______. Balancing these views involves navigating between (8) ______ skepticism and doctrinaire absolutism.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["vitiate", "embrace", "repudiate", "amplify"],
                "correctAnswer": "repudiate" //
            },
            {
                "blankNumber": 2,
                "options": ["contingent", "immutable", "prosaic", "peripheral"],
                "correctAnswer": "contingent" //
            },
            {
                "blankNumber": 3,
                "options": ["bolster", "undermine", "consolidate", "elucidate"],
                "correctAnswer": "undermine" //
            },
            {
                "blankNumber": 4,
                "options": ["axiomatic", "spurious", "quixotic", "laudable"],
                "correctAnswer": "spurious" //
            },
            {
                "blankNumber": 5,
                "options": ["verities", "panaceas", "fulcrums", "subtexts"],
                "correctAnswer": "subtexts" //
            },
            {
                "blankNumber": 6,
                "options": ["extraneous", "circumscribed", "universal", "pellucid"],
                "correctAnswer": "circumscribed" //
            },
            {
                "blankNumber": 7,
                "options": ["inchoate", "transcendent", "transient", "clandestine"],
                "correctAnswer": "transcendent" //
            },
            {
                "blankNumber": 8,
                "options": ["implacable", "dialectical", "pernicious", "perfunctory"],
                "correctAnswer": "dialectical" //
            }
        ]
    },
    {
        "exerciseId": 41,
        "title": "ADVANCED ROBOTICS IN MEDICINE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Surgeons increasingly employ robotic systems that enable (1) ______ precision during minimally invasive procedures. These technologies can (2) ______ human tremors and provide magnified visualization, reducing patient recovery times. However, high acquisition and maintenance costs often remain (3) ______ for smaller hospitals, limiting widespread adoption. Skeptics caution that reliance on advanced robotics could (4) ______ clinical judgment if practitioners lack sufficient training. To mitigate this risk, medical schools are integrating (5) ______ curricula that combine hands‐on experience with (6) ______ simulations. By fostering (7) ______ proficiency, future physicians will be better equipped to harness these tools without compromising patient safety. The ultimate goal is to achieve a harmonious (8) ______ between human expertise and machine assistance.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["dogmatic", "superlative", "arduous", "nascent"],
                "correctAnswer": "superlative" //
            },
            {
                "blankNumber": 2,
                "options": ["obfuscate", "attenuate", "exacerbate", "paraphrase"],
                "correctAnswer": "attenuate" //
            },
            {
                "blankNumber": 3,
                "options": ["inconsequential", "prohibitive", "tractable", "insubstantial"],
                "correctAnswer": "prohibitive" //
            },
            {
                "blankNumber": 4,
                "options": ["vitiate", "galvanize", "proliferate", "rectify"],
                "correctAnswer": "vitiate" //
            },
            {
                "blankNumber": 5,
                "options": ["cursory", "didactic", "languid", "fractious"],
                "correctAnswer": "didactic" //
            },
            {
                "blankNumber": 6,
                "options": ["simulacra", "metrics", "dispatches", "euphemisms"],
                "correctAnswer": "simulacra" //
            },
            {
                "blankNumber": 7,
                "options": ["rudimentary", "flippant", "granular", "perfunctory"],
                "correctAnswer": "granular" //
            },
            {
                "blankNumber": 8,
                "options": ["symbiosis", "discord", "vacillation", "apathy"],
                "correctAnswer": "symbiosis" //
            }
        ]
    },
    {
        "exerciseId": 42,
        "title": "RELIGIOUS PLURALISM IN EDUCATION",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Debates around teaching religion in public schools often focus on maintaining (1) ______ while respecting diverse beliefs. Advocates for inclusive curricula argue that exposing students to multiple faith traditions can foster (2) ______ and reduce prejudice. Conversely, opponents worry that any religious instruction may (3) ______ the secular ethos of public education. Some propose adopting a (4) ______ model emphasizing comparative analysis and historical context rather than devotional practice. Such an approach requires teachers to possess (5) ______ knowledge and cultural sensitivity to avoid (6) ______ stereotypes. Administrators must also navigate legal (7) ______ to ensure compliance with constitutional mandates. If implemented thoughtfully, religious literacy programs can contribute to a more (8) ______ society.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["hegemony", "neutrality", "spontaneity", "parsimony"],
                "correctAnswer": "neutrality" //
            },
            {
                "blankNumber": 2,
                "options": ["animus", "tolerance", "egocentrism", "apathy"],
                "correctAnswer": "tolerance" //
            },
            {
                "blankNumber": 3,
                "options": ["bolster", "vitiate", "propagate", "supersede"],
                "correctAnswer": "vitiate" //
            },
            {
                "blankNumber": 4,
                "options": ["dogmatic", "descriptive", "pernicious", "ephemeral"],
                "correctAnswer": "descriptive" //
            },
            {
                "blankNumber": 5,
                "options": ["perfunctory", "cursory", "exhaustive", "jejune"],
                "correctAnswer": "exhaustive" //
            },
            {
                "blankNumber": 6,
                "options": ["eliding", "crystalline", "punctilious", "insular"],
                "correctAnswer": "insular" //
            },
            {
                "blankNumber": 7,
                "options": ["exigencies", "fallacies", "panaceas", "vacuums"],
                "correctAnswer": "exigencies" //
            },
            {
                "blankNumber": 8,
                "options": ["insular", "sanguine", "pluralistic", "myopic"],
                "correctAnswer": "pluralistic" //
            }
        ]
    },
    {
        "exerciseId": 43,
        "title": "CLIMATE CHANGE REFUGEES",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "As sea levels rise and extreme weather events intensify, the number of climate‐induced displacements is projected to (1) ______ dramatically. Regions with low‐lying coastlines face the prospect of mass (2) ______, with communities losing homes and livelihoods. International law currently lacks a (3) ______ framework to categorize climate refugees, leaving many with (4) ______ legal status. Humanitarian agencies advocate for a (5) ______ approach that links disaster relief with sustainable development, yet geopolitical tensions often (6) ______ such efforts. Critics urge policymakers to adopt (7) ______ thresholds for protection, recognizing environmental factors as legitimate grounds for asylum. Without swift action, vulnerable populations will continue to (8) ______ the front lines of climate injustice.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["stagnate", "surge", "atrophy", "meander"],
                "correctAnswer": "surge" //
            },
            {
                "blankNumber": 2,
                "options": ["diaspora", "panaceas", "anomalies", "epiphany"],
                "correctAnswer": "diaspora" //
            },
            {
                "blankNumber": 3,
                "options": ["robust", "meager", "quixotic", "perfidious"],
                "correctAnswer": "robust" //
            },
            {
                "blankNumber": 4,
                "options": ["precarious", "inviolable", "immutable", "clandestine"],
                "correctAnswer": "precarious" //
            },
            {
                "blankNumber": 5,
                "options": ["parochial", "holistic", "perfunctory", "quiescent"],
                "correctAnswer": "holistic" //
            },
            {
                "blankNumber": 6,
                "options": ["facilitate", "exacerbate", "vindicate", "procure"],
                "correctAnswer": "exacerbate" //
            },
            {
                "blankNumber": 7,
                "options": ["arbitrary", "stringent", "piquant", "nebulous"],
                "correctAnswer": "stringent" //
            },
            {
                "blankNumber": 8,
                "options": ["steward", "languish", "abrogate", "venerate"],
                "correctAnswer": "languish" //
            }
        ]
    },
    {
        "exerciseId": 44,
        "title": "ADVANCES IN RENEWABLE ENERGY",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The proliferation of photovoltaic technology has (1) ______ solar power from niche applications to a (2) ______ component of global energy portfolios. Innovations in perovskite cells have improved conversion efficiency while reducing (3) ______ manufacturing costs. Despite these gains, energy storage remains a (4) ______ challenge, as battery technology struggles to match the (5) ______ output of renewable sources. Some propose integrating (6) ______ smart grids that optimize distribution based on real‐time demand, but such infrastructures require significant (7) ______ investment. Policy incentives, including feed‐in tariffs and tax credits, have been (8) ______ in accelerating adoption.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["relegated", "elevated", "obfuscated", "usurped"],
                "correctAnswer": "elevated" //
            },
            {
                "blankNumber": 2,
                "options": ["peripheral", "quixotic", "fundamental", "ephemeral"],
                "correctAnswer": "fundamental" //
            },
            {
                "blankNumber": 3,
                "options": ["prohibitive", "inconsequential", "perfidious", "salutary"],
                "correctAnswer": "prohibitive" //
            },
            {
                "blankNumber": 4,
                "options": ["transient", "intractable", "spurious", "perennial"],
                "correctAnswer": "intractable" //
            },
            {
                "blankNumber": 5,
                "options": ["erratic", "prodigious", "negligible", "immutable"],
                "correctAnswer": "prodigious" //
            },
            {
                "blankNumber": 6,
                "options": ["insipid", "autonomous", "vicarious", "fractious"],
                "correctAnswer": "autonomous" //
            },
            {
                "blankNumber": 7,
                "options": ["nominal", "exigent", "trifling", "arcane"],
                "correctAnswer": "exigent" //
            },
            {
                "blankNumber": 8,
                "options": ["arbitrary", "instrumental", "deleterious", "anachronistic"],
                "correctAnswer": "instrumental" //
            }
        ]
    },
    {
        "exerciseId": 45,
        "title": "ETHICS OF GENETIC EDITING",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The advent of CRISPR technology has reignited debates about the (1) ______ of editing human embryos. Proponents argue that precise gene modifications could (2) ______ hereditary diseases and reduce suffering. However, detractors caution against unforeseen (3) ______ that could emerge from germline interventions, potentially altering human evolution in (4) ______ ways. Strict regulatory frameworks are essential to balance innovation with (5) ______ considerations, yet international consensus remains (6) ______. Some bioethicists advocate for a (7) ______ moratorium on clinical applications until ethical, social, and legal implications are fully addressed. Others contend that delaying research may (8) ______ potential benefits for current and future generations.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["lucidity", "tenacity", "morality", "brevity"],
                "correctAnswer": "morality" //
            },
            {
                "blankNumber": 2,
                "options": ["engender", "stymie", "obfuscate", "vitiate"],
                "correctAnswer": "stymie" //
            },
            {
                "blankNumber": 3,
                "options": ["exigencies", "perturbations", "redundancies", "veracities"],
                "correctAnswer": "perturbations" //
            },
            {
                "blankNumber": 4,
                "options": ["salutary", "inchoate", "irrevocable", "surreptitious"],
                "correctAnswer": "irrevocable" //
            },
            {
                "blankNumber": 5,
                "options": ["collateral", "myopic", "astute", "egregious"],
                "correctAnswer": "astute" //
            },
            {
                "blankNumber": 6,
                "options": ["axiomatic", "contentious", "pellucid", "banal"],
                "correctAnswer": "contentious" //
            },
            {
                "blankNumber": 7,
                "options": ["provisional", "quixotic", "clandestine", "salutary"],
                "correctAnswer": "provisional" //
            },
            {
                "blankNumber": 8,
                "options": ["bolster", "undermine", "venerate", "flummox"],
                "correctAnswer": "undermine" //
            }
        ]
    },
    {
        "exerciseId": 46,
        "title": "CULTURAL GLOBALIZATION",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "The proliferation of digital media has accelerated (1) ______ cultural exchange, allowing traditions to spread across borders at unprecedented speeds. While this connectivity can (2) ______ homogenization—where dominant cultures overshadow local practices—it also fosters (3) ______ hybridization, as communities reinterpret imported elements. Critics of globalization fear that market-driven dynamics lead to (4) ______ consumption of cultural artifacts, eroding authenticity. Advocates, however, maintain that exposure to diverse perspectives cultivates (5) ______ and stimulates creative innovation. To preserve intangible heritage, some nations have implemented (6) ______ measures, registering folk practices with UNESCO and providing financial support. Ultimately, the challenge lies in striking a (7) ______ between embracing global flows and safeguarding distinctive cultural identities. However, sustainable cultural policy also requires (8) ______ frameworks that reconcile economic growth with preservation.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["anachronistic", "effulgent", "frenetic", "lethargic"],
                "correctAnswer": "frenetic" //
            },
            {
                "blankNumber": 2,
                "options": ["engender", "thwart", "obfuscate", "vacillate"],
                "correctAnswer": "engender" //
            },
            {
                "blankNumber": 3,
                "options": ["effervescent", "insular", "parochial", "vicarious"],
                "correctAnswer": "effervescent" //
            },
            {
                "blankNumber": 4,
                "options": ["gratuitous", "perfidious", "indiscriminate", "dearth"],
                "correctAnswer": "indiscriminate" // // Corrected based on common usage
            },
            {
                "blankNumber": 5,
                "options": ["xenophobia", "propinquity", "cosmopolitanism", "dissonance"],
                "correctAnswer": "cosmopolitanism" //
            },
            {
                "blankNumber": 6,
                "options": ["salutary", "draconian", "perfunctory", "anachronistic"],
                "correctAnswer": "salutary" //
            },
            {
                "blankNumber": 7,
                "options": ["tenuous", "harmonious", "interminable", "sporadic"],
                "correctAnswer": "harmonious" //
            },
            {
                "blankNumber": 8,
                "options": ["nefarious", "robust", "ephemeral", "arcane"],
                "correctAnswer": "robust" //
            }
        ]
    },
    {
        "exerciseId": 47,
        "title": "URBAN CRIME PREVENTION STRATEGIES",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Law enforcement agencies are increasingly adopting (1) ______ policing, which pairs traditional enforcement with community engagement to reduce crime rates. Critics warn that aggressive tactics can (2) ______ distrust among residents, undermining cooperation. Instead, advocates propose (3) ______ initiatives that involve social services, education, and employment programs to address root causes. Implementing such multidisciplinary approaches necessitates (4) ______ coordination among disparate agencies, which can be hindered by bureaucratic (5) ______. Nevertheless, early intervention programs targeting at‐risk youth have shown (6) ______ results, reducing recidivism and fostering social (7) ______. To sustain these gains, long‐term investment in preventive measures must be (8) ______ rather than reactionary.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["proscriptive", "predatory", "community‐oriented", "insouciant"],
                "correctAnswer": "community‐oriented" //
            },
            {
                "blankNumber": 2,
                "options": ["galvanize", "exacerbate", "ameliorate", "venerate"],
                "correctAnswer": "exacerbate" //
            },
            {
                "blankNumber": 3,
                "options": ["punitive", "restorative", "cursory", "clandestine"],
                "correctAnswer": "restorative" //
            },
            {
                "blankNumber": 4,
                "options": ["seamless", "protracted", "quixotic", "perfidious"],
                "correctAnswer": "seamless" //
            },
            {
                "blankNumber": 5,
                "options": ["stasis", "synergy", "miens", "turpitude"],
                "correctAnswer": "stasis" //
            },
            {
                "blankNumber": 6,
                "options": ["salutary", "negligible", "deleterious", "vacuous"],
                "correctAnswer": "salutary" //
            },
            {
                "blankNumber": 7,
                "options": ["cohesion", "anomie", "apathy", "derision"],
                "correctAnswer": "cohesion" //
            },
            {
                "blankNumber": 8,
                "options": ["perfunctory", "sporadic", "perennial", "inimical"],
                "correctAnswer": "perennial" //
            }
        ]
    },
    {
        "exerciseId": 48,
        "title": "ARTIFICIAL INTELLIGENCE IN FINANCE",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Financial institutions have increasingly integrated machine‐learning models to (1) ______ market trends and optimize portfolio management. These algorithms can process vast datasets to identify (2) ______ patterns that elude human analysts. Nonetheless, the opacity of complex models raises concerns about (3) ______ risk and systemic instability. Regulators recommend stringent (4) ______ to ensure model interpretability and prevent (5) ______ trading practices. Some banks have established (6) ______ units tasked with auditing AI systems, fostering a culture of (7) ______. Without such oversight, the proliferation of algorithmic decision‐making could precipitate (8) ______ consequences for global markets.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["obfuscate", "prognosticate", "venerate", "nullify"],
                "correctAnswer": "prognosticate" //
            },
            {
                "blankNumber": 2,
                "options": ["abstruse", "salient", "quixotic", "perfunctory"],
                "correctAnswer": "salient" //
            },
            {
                "blankNumber": 3,
                "options": ["inscrutable", "salutary", "ephemeral", "banal"],
                "correctAnswer": "inscrutable" //
            },
            {
                "blankNumber": 4,
                "options": ["imprimaturs", "protocols", "panaceas", "animadversions"],
                "correctAnswer": "protocols" //
            },
            {
                "blankNumber": 5,
                "options": ["nefarious", "innocuous", "prodigious", "jejune"],
                "correctAnswer": "nefarious" //
            },
            {
                "blankNumber": 6,
                "options": ["rogue", "proponent", "esoteric", "compliance"],
                "correctAnswer": "compliance" //
            },
            {
                "blankNumber": 7,
                "options": ["complacency", "accountability", "obduracy", "apathy"],
                "correctAnswer": "accountability" //
            },
            {
                "blankNumber": 8,
                "options": ["deleterious", "inane", "vicarious", "convivial"],
                "correctAnswer": "deleterious" //
            }
        ]
    },
    {
        "exerciseId": 49,
        "title": "CONTEMPORARY LINGUISTIC PRESCRIPTIVISM",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "Despite extensive descriptive research, many style guides continue to (1) ______ archaic rules that lack empirical support. For instance, the prohibition against split infinitives is often described as (2) ______, derived from dubious imitation of Latin grammar. Adherence to such tenets can (3) ______ writers, stifling creativity and producing unnecessarily (4) ______ prose. Progressive editors advocate for a more (5) ______ approach, emphasizing clarity and context over rigid conformity. However, purists maintain that maintaining (6) ______ standards preserves linguistic heritage and reduces (7) ______. The tension between tradition and innovation reflects broader debates about language’s (8) ______ evolution.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["venerate", "repudiate", "promulgate", "obviate"],
                "correctAnswer": "promulgate" //
            },
            {
                "blankNumber": 2,
                "options": ["salubrious", "specious", "exigent", "perfidious"],
                "correctAnswer": "specious" //
            },
            {
                "blankNumber": 3,
                "options": ["embolden", "constrain", "galvanize", "elucidate"],
                "correctAnswer": "constrain" //
            },
            {
                "blankNumber": 4,
                "options": ["jejune", "effulgent", "mellifluous", "prosaic"],
                "correctAnswer": "prosaic" //
            },
            {
                "blankNumber": 5,
                "options": ["circumspect", "dogmatic", "eclectic", "anachronistic"],
                "correctAnswer": "eclectic" //
            },
            {
                "blankNumber": 6,
                "options": ["idiosyncratic", "pedantic", "arcane", "salutary"],
                "correctAnswer": "pedantic" //
            },
            {
                "blankNumber": 7,
                "options": ["ambiguity", "intransigence", "gravitas", "fervor"],
                "correctAnswer": "ambiguity" //
            },
            {
                "blankNumber": 8,
                "options": ["inexorable", "quotidian", "tenuous", "vacuous"],
                "correctAnswer": "tenuous" //
            }
        ]
    },
    {
        "exerciseId": 50,
        "title": "BIOETHICS AND PATIENT CONSENT",
        "instructions": "For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
        "example": null,
        "textWithBlanks": "In clinical research, obtaining (1) ______ consent is paramount to uphold patient autonomy and dignity. However, complex medical terminology can render consent forms (2) ______, obscuring participants’ understanding of risks. Some institutions have introduced (3) ______ procedures, using simplified language and interactive modules to (4) ______ comprehension. Critics argue that even these efforts may be (5) ______ if patients feel coerced by healthcare providers’ authority. Ethical oversight boards stress that consent processes must remain (6) ______ and free from undue influence. Regular audits and (7) ______ training for research staff can mitigate (8) ______ breaches and reinforce public trust in clinical studies.",
        "questions": [
            {
                "blankNumber": 1,
                "options": ["informed", "perfunctory", "ignominious", "cursory"],
                "correctAnswer": "informed" //
            },
            {
                "blankNumber": 2,
                "options": ["pellucid", "abstruse", "visceral", "pedestrian"],
                "correctAnswer": "abstruse" //
            },
            {
                "blankNumber": 3,
                "options": ["didactic", "salutary", "pernicious", "profligate"],
                "correctAnswer": "didactic" //
            },
            {
                "blankNumber": 4,
                "options": ["augment", "obfuscate", "venerate", "flummox"],
                "correctAnswer": "augment" //
            },
            {
                "blankNumber": 5,
                "options": ["seminal", "soporific", "vacuous", "spurious"],
                "correctAnswer": "vacuous" //
            },
            {
                "blankNumber": 6,
                "options": ["sacrosanct", "jejune", "fractious", "ephemeral"],
                "correctAnswer": "sacrosanct" //
            },
            {
                "blankNumber": 7,
                "options": ["anachronistic", "endemic", "obdurate", "granular"],
                "correctAnswer": "granular" //
            },
            {
                "blankNumber": 8,
                "options": ["ethical", "nominal", "egregious", "gratuitous"],
                "correctAnswer": "egregious" //
            }
        ]
    }
];

// --- Global State Variables ---
let currentExerciseIndex = 0;
let userAnswers = {}; // Stores {blankNumber: selectedOptionLetter} for the current exercise
let exercisesCompletedCount = 0;
let totalCorrectAnswersOverall = 0; // Cumulative score

// --- DOM Element References ---
const exerciseTitleEl = document.getElementById('exerciseTitle');
const exerciseTextContainerEl = document.getElementById('exerciseTextContainer');
const questionsOptionsContainerEl = document.getElementById('questionsOptionsContainer');
const checkAnswersBtn = document.getElementById('checkAnswersBtn');
const nextExerciseBtn = document.getElementById('nextExerciseBtn');
const exerciseFeedbackEl = document.getElementById('exerciseFeedback');
const currentScoreEl = document.getElementById('currentScore');
const exercisesCompletedEl = document.getElementById('exercisesCompleted');
const totalExercisesEl = document.getElementById('totalExercises');
const failSound = document.getElementById('failSound');
const successSound = document.getElementById('successSound');
const exerciseProgressListEl = document.getElementById('exerciseProgressList');

// Example Section Elements (if applicable)
const exampleSectionEl = document.querySelector('.example-section');
const exampleAnswerTextEl = document.getElementById('exampleAnswerText');
const exampleOptionsEl = document.getElementById('exampleOptions');
const exampleAnswerDisplayEl = document.getElementById('exampleAnswerDisplay');


// --- Functions ---

/**
 * Initializes the exercise progress list in the sidebar.
 */
function initializeProgressList() {
    exerciseProgressListEl.innerHTML = '';
    exercises.forEach((exercise, index) => {
        const li = document.createElement('li');
        li.textContent = `Exercise ${exercise.exerciseId}: ${exercise.title}`;
        li.dataset.index = index;
        li.id = `exercise-list-item-${index}`; // Add an ID for easier lookup
        li.addEventListener('click', () => loadExercise(index)); // Make sidebar items clickable
        exerciseProgressListEl.appendChild(li);
    });
    totalExercisesEl.textContent = exercises.length;
}

/**
 * Updates the current exercise's status in the progress list.
 */
function updateProgressListHighlight() {
    Array.from(exerciseProgressListEl.children).forEach((li, idx) => {
        li.classList.remove('current-exercise'); // Clear current highlight
        if (idx === currentExerciseIndex) {
            li.classList.add('current-exercise'); // Highlight current exercise
        }
    });
}

/**
 * Marks an exercise in the progress list as completed (correctly or with mistakes).
 * @param {number} index - The index of the exercise.
 * @param {boolean} isPerfect - True if all answers were correct, false otherwise.
 */
function markExerciseCompletedInList(index, isPerfect) {
    const listItem = document.getElementById(`exercise-list-item-${index}`);
    if (listItem) {
        listItem.classList.remove('current-exercise'); // Remove current highlight
        listItem.classList.remove('completed-correctly', 'completed-incorrectly'); // Reset previous state

        if (isPerfect) {
            listItem.classList.add('completed-correctly');
        } else {
            listItem.classList.add('completed-incorrectly');
        }
    }
}


/**
 * Loads and displays the exercise at the given index.
 * @param {number} index The index of the exercise to load.
 */
function loadExercise(index) {
    if (index < 0 || index >= exercises.length) {
        showCompletionScreen();
        return;
    }

    currentExerciseIndex = index;
    const exercise = exercises[currentExerciseIndex];

    // Reset UI state for the new exercise
    userAnswers = {};
    exerciseFeedbackEl.textContent = '';
    exerciseFeedbackEl.classList.remove('success', 'red-text');
    checkAnswersBtn.classList.remove('hidden');
    nextExerciseBtn.classList.add('hidden');

    // Remove any Word Explorer specific messages
    // The original `wordLookupResultsEl` and `wordLookupInput` elements are now gone,
    // so these lines are removed:
    // wordLookupResultsEl.innerHTML = '<p class="initial-lookup-msg">Definitions and related words will appear here.</p>';
    // wordLookupInput.value = ''; // Clear lookup input

    // Enable all option buttons from previous exercise (if any)
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('selected', 'correct', 'incorrect');
    });

    // Update title
    exerciseTitleEl.textContent = `Exercise ${exercise.exerciseId}: ${exercise.title}`;

    // Handle Example Section (if present in the data)
    if (exercise.example) {
        exampleSectionEl.classList.remove('hidden');
        exampleAnswerTextEl.textContent = exercise.example.text; // Assuming 'text' holds the blank with correct answer
        exampleOptionsEl.innerHTML = ''; // Clear previous options
        exampleAnswerDisplayEl.innerHTML = ''; // Clear previous answer display

        exercise.example.options.forEach((opt, idx) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-button'; // Reusing existing button class
            optionBtn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
            optionBtn.disabled = true; // Example options are not interactive
            exampleOptionsEl.appendChild(optionBtn);

            if (opt === exercise.example.correctAnswer) { // Compare option value to correct answer
                optionBtn.classList.add('correct'); // Mark the correct example option
            }
        });
        exampleAnswerDisplayEl.textContent = `Correct Answer: ${exercise.example.correctAnswer}`;
    } else {
        exampleSectionEl.classList.add('hidden'); // Hide if no example
    }


    // Render text with blanks
    exerciseTextContainerEl.innerHTML = '';
    const textParts = exercise.textWithBlanks.split(/(\(\d+\)\s*______)/g); // Split by blanks

    textParts.forEach(part => {
        if (part.match(/\(\d+\)\s*______/)) {
            // It's a blank placeholder
            const blankNumber = parseInt(part.match(/\((\d+)\)/)[1]);
            const blankContainer = document.createElement('span'); // Container for blank and correct answer display
            blankContainer.className = 'blank-container';
            blankContainer.id = `blank-container-${blankNumber}`; // Add ID for container

            const blankSpan = document.createElement('span');
            blankSpan.className = 'blank';
            blankSpan.dataset.blankNumber = blankNumber;
            blankSpan.id = `blank-${blankNumber}`;
            blankSpan.textContent = `(${blankNumber})`; // Show the number initially
            blankSpan.addEventListener('click', () => { // Make blank clickable to highlight corresponding options
                highlightQuestionOptions(blankNumber);
            });
            blankContainer.appendChild(blankSpan);

            exerciseTextContainerEl.appendChild(blankContainer);
        } else {
            // It's regular text
            const textNode = document.createTextNode(part);
            exerciseTextContainerEl.appendChild(textNode);
        }
    });

    // Render questions and options
    questionsOptionsContainerEl.innerHTML = '';
    exercise.questions.forEach(question => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        questionBlock.dataset.blankNumber = question.blankNumber;
        questionBlock.id = `question-block-${question.blankNumber}`;

        const questionTitle = document.createElement('h4');
        questionTitle.textContent = `Question ${question.blankNumber}:`;
        questionBlock.appendChild(questionTitle);

        const optionsGrid = document.createElement('div');
        optionsGrid.className = 'options-grid';

        // Add 0-based index to options for easy lookup later
        const optionLetters = ['A', 'B', 'C', 'D'];

        question.options.forEach((option, idx) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-button';
            optionBtn.dataset.blankNumber = question.blankNumber;
            optionBtn.dataset.optionValue = option;
            optionBtn.dataset.optionLetter = optionLetters[idx]; // Store 'A', 'B', 'C', 'D'
            optionBtn.textContent = `${optionLetters[idx]}. ${option}`; // A. Option Text
            optionBtn.addEventListener('click', handleOptionClick);
            optionsGrid.appendChild(optionBtn);
        });
        questionBlock.appendChild(optionsGrid);
        questionsOptionsContainerEl.appendChild(questionBlock);
    });

    updateProgressListHighlight(); // Update sidebar highlight for current exercise
}

/**
 * Highlights the question options block corresponding to a clicked blank.
 * @param {number} blankNumber The number of the blank that was clicked.
 */
function highlightQuestionOptions(blankNumber) {
    // Remove highlight from all question blocks
    document.querySelectorAll('.question-block').forEach(block => {
        block.style.backgroundColor = ''; // Clear background
        block.style.border = ''; // Clear border
    });

    // Add highlight to the specific question block
    const targetBlock = document.getElementById(`question-block-${blankNumber}`);
    if (targetBlock) {
        targetBlock.style.backgroundColor = '#e0f2f7'; // Light blue highlight
        targetBlock.style.border = '1px solid #3498db'; // Blue border
        targetBlock.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to it
    }
}


/**
 * Handles clicks on option buttons.
 */
function handleOptionClick(event) {
    const clickedBtn = event.target;
    const blankNumber = clickedBtn.dataset.blankNumber;
    const optionValue = clickedBtn.dataset.optionValue;
    const optionLetter = clickedBtn.dataset.optionLetter;

    // Remove 'selected' from previously selected button for this blank
    const prevSelected = document.querySelector(`#question-block-${blankNumber} .option-button.selected`);
    if (prevSelected) {
        prevSelected.classList.remove('selected');
    }

    // Add 'selected' to the clicked button
    clickedBtn.classList.add('selected');

    // Store the user's answer (letter A, B, C, D)
    userAnswers[blankNumber] = optionLetter;

    // Display the selected answer letter in the blank itself
    const blankPlaceholder = document.getElementById(`blank-${blankNumber}`);
    if (blankPlaceholder) {
        blankPlaceholder.textContent = `(${blankNumber}) ${optionLetter}`; // Show the letter
        blankPlaceholder.classList.remove('selected', 'correct-answer-text', 'incorrect-blank-text'); // Reset previous state
        blankPlaceholder.classList.add('selected'); // Visually mark as selected
        // Remove any previously displayed correct answer text below it
        const prevCorrectDisplay = blankPlaceholder.parentNode.querySelector('.correct-answer-display');
        if (prevCorrectDisplay) {
            prevCorrectDisplay.remove();
        }
    }
}

/**
 * Checks all answers for the current exercise.
 */
function checkAnswers() {
    const exercise = exercises[currentExerciseIndex];
    let correctCount = 0;
    let perfectExerciseAttempt = true; // Tracks if this specific attempt was flawless
    let allAnswered = true; // Check if all blanks have an answer

    // Clear previous highlighting from question blocks
    document.querySelectorAll('.question-block').forEach(block => {
        block.style.backgroundColor = '';
        block.style.border = '';
    });


    exercise.questions.forEach(question => {
        const blankNumber = question.blankNumber;
        const userAnswerLetter = userAnswers[blankNumber]; // This is 'A', 'B', 'C', or 'D'
        const correctAnswerFullText = question.correctAnswer; // This is the full word e.g., 'conspicuous'

        // Map correct answer full text to its corresponding letter
        const correctOptionIndex = question.options.indexOf(correctAnswerFullText);
        const correctLetter = String.fromCharCode(65 + correctOptionIndex);


        const blankPlaceholder = document.getElementById(`blank-${blankNumber}`); // The span with the blank text
        const blankContainer = document.getElementById(`blank-container-${blankNumber}`); // The parent span for flexbox
        const optionButtons = document.querySelectorAll(`#question-block-${blankNumber} .option-button`); // All A,B,C,D buttons for this blank

        // Remove any previously displayed correct answer text below the blank
        const prevCorrectDisplay = blankContainer.querySelector('.correct-answer-display');
        if (prevCorrectDisplay) {
            prevCorrectDisplay.remove();
        }

        // Reset classes for the blank in text
        blankPlaceholder.classList.remove('selected', 'correct-answer-text', 'incorrect-blank-text');

        // Check if an answer was provided for this blank
        if (!userAnswerLetter) {
            allAnswered = false;
            perfectExerciseAttempt = false; // Cannot be perfect if not all answered
            blankPlaceholder.textContent = `(${blankNumber}) NO ANSWER`;
            blankPlaceholder.classList.add('incorrect-blank-text'); // Mark blank itself as red
            // Show correct answer below the blank
            const correctTextDisplay = document.createElement('span');
            correctTextDisplay.className = 'correct-answer-display';
            correctTextDisplay.textContent = `Correct: (${correctLetter}) ${correctAnswerFullText}`;
            blankContainer.appendChild(correctTextDisplay);
        } else {
            // An answer was provided, now check if it's correct
            if (userAnswerLetter === correctLetter) {
                correctCount++;
                blankPlaceholder.textContent = `(${blankNumber}) ${userAnswerLetter}`; // Show user's correct letter
                blankPlaceholder.classList.add('correct-answer-text'); // Mark blank text as green

                // Mark the selected button green
                Array.from(optionButtons).find(btn => btn.dataset.optionLetter === userAnswerLetter).classList.add('correct');

            } else {
                perfectExerciseAttempt = false; // A mistake was made

                blankPlaceholder.textContent = `(${blankNumber}) ${userAnswerLetter}`; // Show user's incorrect letter
                blankPlaceholder.classList.add('incorrect-blank-text'); // Mark blank text as red

                // Mark user's selected button red (incorrect)
                Array.from(optionButtons).find(btn => btn.dataset.optionLetter === userAnswerLetter).classList.add('incorrect');

                // Mark the actual correct button green
                Array.from(optionButtons).find(btn => btn.dataset.optionLetter === correctLetter).classList.add('correct');

                // Display correct answer below the blank
                const correctTextDisplay = document.createElement('span');
                correctTextDisplay.className = 'correct-answer-display';
                correctTextDisplay.textContent = `Correct: (${correctLetter}) ${correctAnswerFullText}`;
                blankContainer.appendChild(correctTextDisplay);
            }
        }

        // Disable all buttons for this question after checking
        optionButtons.forEach(btn => btn.disabled = true);
    });

    if (!allAnswered) {
        exerciseFeedbackEl.textContent = 'Please answer all questions before checking!';
        exerciseFeedbackEl.classList.remove('success');
        exerciseFeedbackEl.classList.add('red-text');
        failSound.play(); // Play fail sound if not all answered
        // Do not update score or completion counts if not all answered, let user correct.
        checkAnswersBtn.classList.remove('hidden'); // Keep check button visible
        nextExerciseBtn.classList.add('hidden'); // Keep next button hidden
        return; // Stop function execution here
    }

    // Only update cumulative score if all questions were attempted
    totalCorrectAnswersOverall += correctCount;
    currentScoreEl.textContent = totalCorrectAnswersOverall;


    // Feedback message and sounds
    if (perfectExerciseAttempt) {
        exerciseFeedbackEl.textContent = "Excellent! All answers are correct!";
        exerciseFeedbackEl.classList.remove('red-text');
        exerciseFeedbackEl.classList.add('success');
        successSound.play();
    } else {
        exerciseFeedbackEl.textContent = "Make a note of your mistakes and make sure you revise!";
        exerciseFeedbackEl.classList.remove('success');
        exerciseFeedbackEl.classList.add('red-text');
        failSound.play();
    }

    // Hide check button, show next button
    checkAnswersBtn.classList.add('hidden');
    nextExerciseBtn.classList.remove('hidden');

    // Update exercise completion in sidebar
    markExerciseCompletedInList(currentExerciseIndex, perfectExerciseAttempt);
}


/**
 * Shows the final completion screen when all exercises are done.
 */
function showCompletionScreen() {
    exerciseTitleEl.textContent = "Congratulations!";
    exerciseTextContainerEl.innerHTML = "<p>You have completed all vocabulary exercises!</p><p>Keep revising your new words to master them!</p>";
    questionsOptionsContainerEl.innerHTML = '';
    checkAnswersBtn.classList.add('hidden');
    nextExerciseBtn.classList.add('hidden');
    exerciseFeedbackEl.textContent = `You are a C2 Vocab Conqueror! Your total score: ${totalCorrectAnswersOverall}`;
    exerciseFeedbackEl.classList.add('success');
    // Removed wordLookupResultsEl related line
    totalExercisesEl.textContent = exercises.length; // Ensure this is correct
}

// --- NEW EXTERNAL DICTIONARY LOGIC (ADD THIS SECTION) ---
// These are the new DOM elements for the external dictionary lookup
const externalWordLookupInput = document.getElementById('externalWordLookupInput');
const searchExternalDictionaryBtn = document.getElementById('searchExternalDictionaryBtn');
const dictionaryIframe = document.getElementById('dictionaryIframe');

// Example: Merriam-Webster search URL. You may need to change this based on your chosen dictionary.
// Most dictionaries have a search path like /dictionary/{word} or /search?q={word}
// You might need to experiment with different dictionary sites to find one that allows iframe embedding and has a simple search URL structure.
const DICTIONARY_BASE_URL = "https://www.merriam-webster.com/dictionary/";

if (searchExternalDictionaryBtn && externalWordLookupInput && dictionaryIframe) {
    searchExternalDictionaryBtn.addEventListener('click', () => {
        const word = externalWordLookupInput.value.trim();
        if (word) {
            dictionaryIframe.src = DICTIONARY_BASE_URL + encodeURIComponent(word);
        } else {
            dictionaryIframe.src = "about:blank"; // Clear iframe if no word
        }
    });

    externalWordLookupInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchExternalDictionaryBtn.click();
        }
    });
} else {
    console.warn("External dictionary elements not found. Ensure HTML has IDs 'externalWordLookupInput', 'searchExternalDictionaryBtn', 'dictionaryIframe'.");
}

// --- Event Listeners ---
checkAnswersBtn.addEventListener('click', checkAnswers);
nextExerciseBtn.addEventListener('click', () => {
    loadExercise(currentExerciseIndex + 1);
});


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initializeProgressList();
    loadExercise(currentExerciseIndex); // Load the first exercise
});