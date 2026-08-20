import { Fact } from "./types";

/**
 * Every entry here must trace to a real, checkable source. Add new facts by
 * appending an object — no component code needs to change.
 */
export const facts: Fact[] = [
  {
    title: "Arts credits and high school graduation",
    category: "Arts Education",
    summary:
      "Analyzing four national longitudinal datasets, researchers found that arts-rich backgrounds help narrow achievement gaps between higher- and lower-income students.",
    statistic:
      "High school students who earned few or no arts credits were about five times more likely not to graduate than students who earned many arts credits.",
    organization: "National Endowment for the Arts",
    source:
      "Catterall, J.S., Dumais, S.A., & Hampden-Thompson, G. — The Arts and Achievement in At-Risk Youth: Findings from Four Longitudinal Studies (NEA Research Report #55)",
    publicationDate: "March 2012",
    url: "https://www.arts.gov/sites/default/files/Arts-At-Risk-Youth.pdf",
  },
  {
    title: "Fine arts credits and cumulative GPA",
    category: "Arts Education",
    summary:
      "A 2025 analysis of federal longitudinal data traced arts participation from early childhood through high school.",
    statistic:
      "Completing more fine arts credits in high school was associated with higher cumulative GPAs across English, math, science, and social studies — and a far higher likelihood of earning a diploma.",
    organization: "National Endowment for the Arts",
    source: "Snapshots of Arts Education in Childhood and Adolescence: Access and Outcomes",
    publicationDate: "January 2025",
    url: "https://www.arts.gov/sites/default/files/Snapshots-of%20Arts-Education-in-Childhood-and-Adolescence-January-2025.pdf",
  },
  {
    title: "Access to arts education isn't equal",
    category: "Arts Education",
    summary:
      "The same NEA report cites federal School Pulse Panel survey data on which schools actually require arts coursework.",
    statistic:
      "84% of public schools in low-poverty areas offer visual arts classes, compared with 73% in high-poverty areas — a persistent access gap tARTine wants to help close.",
    organization: "National Center for Education Statistics, via National Endowment for the Arts",
    source: "Snapshots of Arts Education in Childhood and Adolescence: Access and Outcomes",
    publicationDate: "January 2025",
    url: "https://www.arts.gov/sites/default/files/Snapshots-of%20Arts-Education-in-Childhood-and-Adolescence-January-2025.pdf",
  },
  {
    title: "One museum visit changes how students think",
    category: "Experimentation",
    summary:
      "The first large-scale randomized-controlled trial on school museum tours, run at Crystal Bridges Museum of American Art.",
    statistic:
      "3,811 students randomly assigned to a single art museum field trip showed significant gains in critical thinking, historical empathy, and tolerance — with the largest effects for students from disadvantaged backgrounds.",
    organization: "Educational Evaluation and Policy Analysis",
    source: "Greene, J.P., Kisida, B., & Bowen, D.H. — Learning to Think Critically: A Visual Art Experiment",
    publicationDate: "2014",
    url: "https://www.educationnext.org/field-trips-to-art-museums-improve-critical-thinking-promote-historical-empathy-and-increase-tolerance/",
  },
  {
    title: "Drama builds more than confidence",
    category: "Learning",
    summary:
      "A meta-analysis pooling three decades of research on drama-based teaching methods in PreK–16 classrooms — directly relevant to tARTine's acting-fundamentals workshop.",
    statistic:
      "Across 47 studies, drama-based pedagogy had a significant positive effect on student achievement and related skills, with the strongest effects for upper-elementary and middle-school students.",
    organization: "Review of Educational Research",
    source:
      "Lee, B.K., Patall, E.A., Cawthon, S.W., & Steingut, R.R. — The Effect of Drama-Based Pedagogy on PreK–16 Outcomes: A Meta-Analysis of Research From 1985 to 2012",
    publicationDate: "2015",
    url: "https://journals.sagepub.com/doi/abs/10.3102/0034654314540477",
  },
  {
    title: "Arts classrooms are built for connection",
    category: "Collaboration",
    summary:
      "A synthesis of more than 200 studies spanning six decades, plus original interviews with Chicago students, families, and educators.",
    statistic:
      "Arts education creates distinct opportunities for social-emotional growth — through collaboration, shared responsibility, and processing setbacks — especially when educators design for it intentionally.",
    organization: "University of Chicago Consortium on School Research",
    source: "Farrington, C., et al. — Arts Education and Social-Emotional Learning Outcomes among K-12 Students",
    publicationDate: "June 2019",
    url: "https://consortium.uchicago.edu/publications/arts-education-and-social-emotional-learning-outcomes",
  },
  {
    title: "Art strengthens STEM problem-solving",
    category: "STEM + STEAM",
    summary:
      "Recent STEAM-integration research examines what happens when arts practices are woven directly into science and math instruction, rather than taught separately.",
    statistic:
      "Studies of integrated STEAM curricula report measurable gains in students' creative problem-solving and transferable ('transversal') skills across subjects.",
    organization: "Education Sciences (MDPI), vol. 14, issue 6",
    source: "Integrated STEAM Education for Students' Creativity Development",
    publicationDate: "2024",
    url: "https://www.mdpi.com/2227-7102/14/6/676",
  },
];

export const factCategories = Array.from(new Set(facts.map((f) => f.category)));
