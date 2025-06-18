import Ants from "../assets/ants.jpg";
import Gophers from "../assets/gopher.jpg";
import Bedbugs from "../assets/bedbugs.jpg";
import Rats from "../assets/rat.jpg";
import Cockroaches from "../assets/cockroaches.jpg";
import Termites from "../assets/termites.jpg";


export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  process: string[];
  guarantee: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'ants',
    name: 'Ant Control',
    description: 'Complete ant elimination with targeted treatments˝ that get to the source of the problem.',
    icon: 'Bug',
    features: [
      'Species identification and targeted treatment',
      'Colony elimination strategies',
      'Preventative barrier treatments',
      'Safe for pets and children'
    ],
    process: [
      'Thorough inspection and ant species identification',
      'Locate and treat ant trails and entry points',
      'Apply targeted baiting systems',
      'Create protective barriers around your property'
    ],
    guarantee: '30-day satisfaction guarantee with follow-up treatments included',
    image: Ants
  },
  {
    id: 'gophers',
    name: 'Gopher Control',
    description: 'Professional gopher removal to protect your landscaping and property value.',
    icon: 'Mountain',
    features: [
      'Humane and effective removal methods',
      'Lawn and garden damage prevention',
      'Underground tunnel system mapping',
      'Seasonal maintenance programs'
    ],
    process: [
      'Property assessment and tunnel identification',
      'Strategic trap placement',
      'Regular monitoring and maintenance',
      'Damage repair recommendations'
    ],
    guarantee: 'Results guaranteed or we return for additional treatments',
    image: Gophers
  },
  {
    id: 'bedbugs',
    name: 'Bed Bug Treatment',
    description: 'Advanced heat and chemical treatments to completely eliminate bed bug infestations.',
    icon: 'Bed',
    features: [
      'Heat treatment and chemical options',
      'Thorough mattress and furniture inspection',
      'Multi-stage treatment protocol',
      'Post-treatment monitoring'
    ],
    process: [
      'Comprehensive inspection of all sleeping areas',
      'Customized treatment plan development',
      'Professional-grade treatment application',
      'Follow-up inspections and treatments'
    ],
    guarantee: '60-day warranty with free re-treatments if needed',
    image: Bedbugs
  },
  {
    id: 'rats-mice',
    name: 'Rodent Control',
    description: 'Complete rodent elimination and exclusion services to keep your property rodent-free.',
    icon: 'Rat',
    features: [
      'Comprehensive exclusion services',
      'Safe and effective elimination methods',
      'Sanitation and cleanup services',
      'Ongoing prevention strategies'
    ],
    process: [
      'Property inspection and entry point identification',
      'Strategic trapping and baiting programs',
      'Seal entry points and exclusion work',
      'Sanitation and damage assessment'
    ],
    guarantee: 'Full warranty with unlimited service calls',
    image: Rats
  },
  {
    id: 'cockroaches',
    name: 'Cockroach Elimination',
    description: 'Professional cockroach control using advanced baiting systems and growth regulators.',
    icon: 'Bug2',
    features: [
      'Advanced gel baiting systems',
      'Growth regulator applications',
      'Sanitation consulting',
      'Long-lasting residual treatments'
    ],
    process: [
      'Identify cockroach species and harborages',
      'Apply targeted gel baits and treatments',
      'Install monitoring stations',
      'Provide sanitation and prevention advice'
    ],
    guarantee: '90-day service warranty with ongoing monitoring',
    image: Cockroaches
  },
  {
    id: 'termites',
    name: 'Termite Protection',
    description: 'Advanced termite detection, treatment, and prevention systems to protect your investment.',
    icon: 'Home',
    features: [
      'Comprehensive termite inspections',
      'Advanced treatment technologies',
      'Preventative barrier systems',
      'Annual monitoring programs'
    ],
    process: [
      'Detailed structural inspection',
      'Advanced detection technology',
      'Customized treatment application',
      'Ongoing monitoring and maintenance'
    ],
    guarantee: 'Industry-leading warranty up to $1M damage protection',
    image: Termites
  }
];