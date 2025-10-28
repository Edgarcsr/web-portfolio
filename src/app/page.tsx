import { EducationHistory } from '@/components/education-history'
import { PersonalSummary } from '@/components/personal-summary'
import { Technologies } from '@/components/technologies'

export default function Home() {
  return (
    <main className="px-12 py-1">
      {
        <div>
          <PersonalSummary />
          <EducationHistory />
          <Technologies />
        </div>
      }
    </main>
  )
}
