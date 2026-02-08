import { useEffect } from 'react';
import { GraduationCap, Microscope, Atom, Stethoscope, Cpu, FlaskConical, Zap } from 'lucide-react';
import MarketingSection from '@/components/MarketingSection';
import CourseSection from '@/components/CourseSection';
import { setPageMeta } from '@/lib/seo';

export default function CoursesPage() {
  useEffect(() => {
    setPageMeta(
      'Courses - Board Classes & Competitive Exam Preparation | Science Squad',
      'Explore Science Squad\'s comprehensive courses: Classes 6-12 (CBSE, ICSE, ISC) and competitive exam coaching for IIT-JEE, NEET, WBJEE, JELET, and JENPAS in Kolkata.'
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <MarketingSection className="bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Our <span className="text-primary">Courses</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Comprehensive programs designed to help students excel in board examinations and competitive tests with expert guidance and proven methodologies.
          </p>
        </div>
      </MarketingSection>

      {/* Board Classes */}
      <MarketingSection>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Board Classes</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Complete syllabus coverage for CBSE, ICSE & ISC boards with focus on conceptual understanding and exam preparation.
          </p>
        </div>
        <div className="space-y-8">
          <CourseSection
            title="Classes 6 to 12 (CBSE / ICSE / ISC)"
            icon={<GraduationCap className="h-8 w-8" />}
            overview="Comprehensive coaching for students from Class 6 to Class 12 following CBSE, ICSE, and ISC board curricula. Our structured approach ensures thorough understanding of all subjects with special emphasis on Mathematics and Science."
            benefits={[
              'Complete syllabus coverage aligned with board curriculum',
              'Regular chapter-wise tests and assessments',
              'Detailed explanation of concepts with practical examples',
              'Previous year question paper analysis and practice',
              'Doubt clearing sessions and personalized attention',
              'Study material and notes prepared by expert faculty',
              'Parent-teacher meetings for progress tracking',
              'Focus on both theory and numerical problem-solving',
            ]}
          />
        </div>
      </MarketingSection>

      {/* Competitive Foundation */}
      <MarketingSection className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Competitive Foundation Courses</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Specialized coaching programs to prepare students for India's most challenging competitive examinations.
          </p>
        </div>
        <div className="space-y-8">
          <CourseSection
            title="IIT-JEE (Main & Advanced)"
            icon={<Atom className="h-8 w-8" />}
            overview="Intensive preparation for IIT-JEE Main and Advanced examinations covering Physics, Chemistry, and Mathematics. Our program builds strong fundamentals while developing problem-solving skills required for these prestigious exams."
            benefits={[
              'Comprehensive coverage of JEE Main and Advanced syllabus',
              'Regular mock tests simulating actual exam patterns',
              'Advanced problem-solving techniques and shortcuts',
              'Topic-wise practice with increasing difficulty levels',
              'Previous year JEE questions with detailed solutions',
              'Time management and exam strategy sessions',
              'Doubt resolution by experienced IIT-JEE faculty',
              'Performance analysis and personalized improvement plans',
            ]}
          />

          <CourseSection
            title="NEET (Medical Entrance)"
            icon={<Stethoscope className="h-8 w-8" />}
            overview="Complete NEET preparation covering Physics, Chemistry, and Biology with emphasis on NCERT-based conceptual clarity and application-oriented problem solving essential for medical entrance success."
            benefits={[
              'NCERT-focused approach aligned with NEET pattern',
              'Comprehensive Biology coverage (Botany & Zoology)',
              'Regular NEET-pattern mock tests and assessments',
              'Diagram practice and labeling techniques',
              'Previous year NEET questions with explanations',
              'Memory techniques for Biology concepts',
              'Physics and Chemistry problem-solving strategies',
              'Current affairs and recent developments in medical science',
            ]}
          />

          <CourseSection
            title="WBJEE (West Bengal Joint Entrance)"
            icon={<Cpu className="h-8 w-8" />}
            overview="Targeted preparation for WBJEE covering Mathematics, Physics, and Chemistry with focus on state-level exam patterns and question types specific to West Bengal engineering entrance."
            benefits={[
              'WBJEE-specific syllabus and exam pattern coverage',
              'State board and CBSE curriculum integration',
              'Regular practice with WBJEE-style questions',
              'Previous year WBJEE paper analysis and solutions',
              'Mathematics emphasis on calculus and algebra',
              'Physics focus on mechanics and modern physics',
              'Chemistry coverage of organic and inorganic topics',
              'Time-bound test series for speed and accuracy',
            ]}
          />

          <CourseSection
            title="JELET (Joint Entrance for Lateral Entry)"
            icon={<FlaskConical className="h-8 w-8" />}
            overview="Specialized coaching for diploma holders seeking lateral entry into engineering degree programs through JELET examination, covering Mathematics, Physics, and Chemistry at diploma level."
            benefits={[
              'Diploma-level syllabus coverage for lateral entry',
              'Focus on engineering mathematics fundamentals',
              'Applied physics concepts for engineering students',
              'Chemistry topics relevant to engineering applications',
              'Previous year JELET question papers with solutions',
              'Bridge course for smooth transition to degree programs',
              'Regular assessments and progress monitoring',
              'Career guidance for engineering specializations',
            ]}
          />

          <CourseSection
            title="JENPAS (Joint Entrance for Nursing & Paramedical)"
            icon={<Zap className="h-8 w-8" />}
            overview="Comprehensive preparation for JENPAS examination covering Physics, Chemistry, and Biology for students aspiring to pursue nursing and paramedical courses in West Bengal."
            benefits={[
              'Complete JENPAS syllabus coverage',
              'Biology emphasis on human anatomy and physiology',
              'Physics and Chemistry at intermediate level',
              'Previous year JENPAS questions and analysis',
              'General knowledge and current affairs for nursing',
              'Interview preparation and personality development',
              'Career counseling for paramedical fields',
              'Regular mock tests following JENPAS pattern',
            ]}
          />
        </div>
      </MarketingSection>
    </>
  );
}
