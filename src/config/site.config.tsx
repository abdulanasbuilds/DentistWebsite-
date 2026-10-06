export type Version = 'one' | 'two';

export const siteConfig = {
  shared: {
    phone: '(9568) 455-7656',
    address: '165 Canal Street, New York, NY 10002',
    hours: ['Monday – Friday: 8.00 – 17.00', 'Saturday: 9.30 – 17.30', 'Sunday: 9.30 – 15.00'],
  },
  one: {
    name: 'Dentel',
    nav: ['Home', 'About Us', 'Services', 'Blog', 'Pages', 'Contact us'],
    heroTitle: <>Your Smile Deserves <em>The Best</em> Quality</>,
    heroCopy: 'We keep teeth clean, strong, healthy with simple dental care always.',
    heroImage: '/images/v1-hero.png',
    about: 'We provide trusted dental care with bright healthy smiles, gentle treatments, advanced technology, and expert support for strong lasting confidence every single day.',
    services: [
      { title: 'Oral Surgery', copy: 'Oral surgery provides safe treatment for complex dental issues, improving function, health, and comfort.', image: '/images/v1-service-1.jpg' },
      { title: 'Braces Treatment', copy: 'Braces treatment straightens teeth, fixes bite, and improves smile appearance beautifully.', image: '/images/v1-service-2.jpg' },
      { title: 'Root Canal', copy: 'Root canal removes infected pulp, reduces pain, and preserves your natural tooth.', image: '/images/v1-service-3.jpg' },
    ],
    problems: [
      ['01', 'Cavities', 'Tooth decay creates holes and causes tooth pain.'],
      ['02', 'Gingivitis', 'Inflamed gums may bleed and damage oral health.'],
      ['03', 'Plaque', 'Plaque builds on teeth and causes problems.'],
      ['04', 'Sensitivity', 'Sensitive teeth hurt badly with hot or cold.'],
      ['05', 'Crowding', 'Misaligned teeth affect bite, comfort, and appearance.'],
      ['06', 'Staining', 'Teeth discolor from foods, drinks, and smoking.'],
    ],
    process: ['Dental Checkup', 'Teeth Cleaning', 'Treatment Process', 'Smile Improvement', 'Regular Follow Up'],
    testimonials: [
      ['Michael Johnson', 'I had a great experience at this clinic. The team was professional, attentive, and supportive throughout treatment. The results were excellent, and I feel much more confident.'],
      ['Daniel Carter', 'The dental team provided excellent care throughout my treatment. Their professionalism, clear communication, and gentle approach made every visit comfortable and reassuring.'],
      ['Olivia Thompson', 'The treatment process was smooth and stress-free. The staff demonstrated professionalism and compassion, making me feel confident about my dental health.'],
    ],
  },
  two: {
    name: 'DentalOne',
    nav: ['Home', 'Services', 'Process', 'FAQ'],
    heroTitle: <>Gorgeous Smile for <strong>a Brighter Life</strong></>,
    heroCopy: 'Modern dental care, personalized treatment, and a comfortable experience—all designed around your smile.',
    heroImage: '/images/v2-hero.png',
    introImage: '/images/v2-intro.png',
    services: [
      ['General Dentistry', 'Routine dental care focused on keeping your teeth, gums, and mouth healthy.'],
      ['Cosmetic Dentistry', 'Enhance your smile with treatments designed to improve the appearance of your teeth.'],
      ['Restorative Dentistry', 'Restore damaged or missing teeth and bring back comfortable, healthy function.'],
      ['Orthodontics Procedure', 'Straighten teeth and improve your bite with personalized orthodontic treatments.'],
      ['Pediatric Dentistry', 'Gentle, child-friendly dental care that supports healthy teeth and positive habits.'],
      ['Specialized Treatments', 'Advanced dental solutions tailored to specific oral health needs and complex conditions.'],
    ],
    steps: [['01', 'Book Online', 'Choose a convenient date and time'], ['02', 'Visit Our Clinic', 'Meet our dental team for a consultation'], ['03', 'Get Your Treatment', 'Receive the treatment with a clear care plan']],
    team: [
      ['Dr. Sarah Mitchell', 'Lead Dentist · DDS, MDS', 'Dr. Sarah Mitchell is an experienced dentist focused on comprehensive oral care and preventive treatment.', '/images/v2-team-1.jpg'],
      ['Dr. James Anderson', 'Lead Dentist · DDS, MDS', 'Dr. James Anderson specializes in cosmetic and restorative dentistry, helping patients achieve healthier teeth and confident smiles.', '/images/v2-team-2.jpg'],
      ['Dr. Emily Carter', 'Lead Dentist · DDS, MDS', 'Dr. Emily Carter provides gentle, family-friendly dental care with a focus on children and orthodontic treatments.', '/images/v2-team-1.jpg'],
    ],
    faq: [['How often should I visit the dentist?', 'Regular checkups every six months help keep your teeth and gums healthy.'], ['Do you offer cosmetic dentistry?', 'Yes. Our cosmetic services are designed around your smile goals and comfort.'], ['Can I book online?', 'The appointment interface is ready for connection to an approved booking provider.']],
  },
} as const;
