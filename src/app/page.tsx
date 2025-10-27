import { EducationHistory } from '@/components/education-history'
import { PersonalSummary } from '@/components/personal-summary'

export default function Home() {
  return (
    <main className="px-12 py-6">
      {
        <div>
          <PersonalSummary />
          <EducationHistory />
        </div>
      }
    </main>
  )
}
