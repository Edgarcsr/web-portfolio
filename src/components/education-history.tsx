import Image from 'next/image'
import { Fragment } from 'react/jsx-runtime'
import { Separator } from './ui/separator'

export function EducationHistory() {
  const educationHistory = [
    {
      institution: 'Rocketseat',
      course: 'Bootcamp de programação',
      logo: '/rocketseat-logo.webp',
      year: 2025,
      //   endYear: 'até o momento',
    },
    {
      institution: 'Faculdade Engenheiro Salvador Arena (FESA)',
      course: 'Baicharelado em programação',
      logo: '/salvador-arena-logo.webp',
      year: 2022,
      endYear: 2027,
    },
    {
      institution: 'Colegio Abaco',
      course: 'Ensino Fundamental e Médio',
      logo: '/colegio-abaco-logo.webp',
      year: 2017,
      endYear: 2020,
    },
  ]
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm text-muted-foreground">Educação</h2>
      {educationHistory.map((education) => (
        <Fragment key={education.institution}>
          <div className="flex justify-between items-center">
            <div className="flex flex-1 text-sm items-center gap-2">
              <Image
                src={education.logo}
                alt=""
                width={100}
                height={100}
                className="aspect-square size-6 rounded-md"
              />
              <p>{education.institution}</p>
              <span className="text-muted-foreground/70">/</span>
              <p className="text-muted-foreground">{education.course}</p>
            </div>
            <p className="text-sm">
              {education.year}{' '}
              {education.endYear ? `– ${education.endYear}` : ''}
            </p>
          </div>
          <Separator orientation="horizontal" />
        </Fragment>
      ))}
    </div>
  )
}
