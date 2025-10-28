import { CircleCheckIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const technologies = [
  {
    name: 'Conteinerização',
    description: 'Docker',
  },
  {
    name: 'Infraestrutura como Código',
    description: 'Terraform',
  },
  {
    name: 'APIs REST',
    description: 'Node.js, Fastify, NestJS',
  },
  {
    name: 'Banco de Dados',
    description: 'PostgreSQL, MongoDB, MS SQL Server',
  },
  {
    name: 'Cloud Computing',
    description: 'AWS, Azure',
  },
]

export function Technologies() {
  return (
    <div className="my-16">
      <div className="grid lg:grid-cols-3 gap-4 lg:px-32">
        <div className="border rounded-md p-6">
          <h2 className="font-medium text-xl">
            Construindo a tecnologia do amanhã
          </h2>
          <p className="text-xs text-muted-foreground leading-5">
            Sempre busco aprender novas tecnologias que possam facilitar e
            entregar valor e agilidade aos meus projetos.
          </p>
          <ul>
            {technologies.map((technology) => (
              <li
                key={technology.name}
                className="flex items-center space-x-2 mt-2"
              >
                <Tooltip>
                  <TooltipTrigger
                    className="flex items-center space-x-2"
                    asChild
                  >
                    <div>
                      <CircleCheckIcon className="size-4 text-emerald-500" />
                      <div>
                        <p className="text-sm">{technology.name}</p>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p className="text-xs">{technology.description}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-md p-6 lg:col-span-2"></div>
      </div>
    </div>
  )
}
