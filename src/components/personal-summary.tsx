import { LanguagesIcon, MapPin } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function PersonalSummary() {
  return (
    <div className="mb-4 flex flex-col gap-4">
      <div className="flex gap-2 items-center m-auto md:m-0">
        <Avatar>
          <AvatarImage src="/avatar2.webp" alt="@Edgarcsr" />
          <AvatarFallback>EC</AvatarFallback>
        </Avatar>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center gap-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-purple-500"></span>
              </span>
              <p className="text-muted-foreground text-xs">Disponível</p>
            </div>
            <TooltipContent side="right">
              <p>Estou livre para receber propostas!</p>
            </TooltipContent>
          </TooltipTrigger>
        </Tooltip>
      </div>
      <div className="text-center md:text-left">
        <h2 className="font-medium text-lg">Apaixonado por mudar o mundo!</h2>
        <p className="text-muted-foreground text-sm max-w-xl">
          Estou sempre em busca de novas oportunidades para aprender e crescer.
          Aprender novas tecnologias e compartilhar conhecimento são minhas
          maiores paixões.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2 items-center m-auto md:m-0">
          <MapPin className="text-muted-foreground" size={14} />
          <div className="text-xs text-muted-foreground">São Paulo, Brasil</div>
        </div>
        <div className="flex gap-2 items-center m-auto md:m-0">
          <LanguagesIcon className="text-muted-foreground" size={14} />
          <div className="text-xs text-muted-foreground">
            <Tooltip>
              <TooltipTrigger>
                <span>Português</span>
                <span className="sr-only">Nativo</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Idioma nativo</p>
              </TooltipContent>
            </Tooltip>
            {', '}
            <Tooltip>
              <TooltipTrigger>
                <span>Inglês</span>
                <span className="sr-only">
                  Avançado, Certificação Cambridge B2
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Certificação Cambridge B2</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
