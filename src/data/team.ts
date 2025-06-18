import Lisa from '../assets/lisa.jpeg';
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  image: string;
  isFounder?: boolean;
}


export const teamMembers: TeamMember[] = [
  {
    id: 'troy',
    name: 'Troy Arnett',
    title: 'Founder & Lead Technician',
    bio: "Troy brings over three decades of experience in the pest control industry and founded Orion Pest Control in 2003. He has built a trusted reputation for delivering reliable, results-driven service to property managers and commercial clients throughout Silicon Valley. As the owner, Troy leads with integrity, deep industry knowledge, and a strong commitment to client satisfaction. Outside of work, he is an accomplished pianist and enjoys all things outdoors—fishing, hiking, or climbing a mountain.",
    expertise: ['Integrated Pest Management', 'Structural Pest Control', 'Wildlife Management', 'Customer Relations'],
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    isFounder: true
  },
  {
    id: 'lisa',
    name: 'Lisa Arnett',
    title: 'Office Manager',
    bio: "Lisa oversees all office operations at Orion Pest Control, including billing, client communication, and bookkeeping. She brings an extensive background in property management and financial administration, giving her a strong understanding of the needs of our commercial and multifamily clients. In addition to her role at Orion, Lisa is a self-employed bookkeeper serving small business clients. Outside of work, she enjoys quilting and cooking.",
    expertise: ['Property Management', 'Bookkeeping', 'Customer Relations', 'Small Business Administration'],
    image: Lisa
  },
  {
    id: 'jordan',
    name: 'Jordan',
    title: 'Service Manager',
    bio: "With over 10 years of hands-on experience in the pest control industry, Jordan brings deep knowledge and dedication to his role as Service Manager at Orion Pest Control. He pairs his technical expertise with a calm, problem-solving approach that puts clients at ease. Outside of work, Jordan enjoys cooking and spending time with his pet rabbits.",
    expertise: ['Pest Control', 'Customer Service', 'Problem Solving', 'Team Leadership'],
    image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg'
  }
];