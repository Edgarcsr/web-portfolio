import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function PersonalSummary() {
  return (
    <div className="mb-4">
      <div className="flex gap-2 items-center">
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
    </div>
  )
}
