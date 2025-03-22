import { Controller, Get } from "@nestjs/common"
import { Tecnologia } from "@core"
import { TecnologiaPrisma } from "./tecnologia.prisma"

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly repoTecnologia: TecnologiaPrisma) {}
	@Get()
	async obterTecnologias(): Promise<Tecnologia[]> {
		return this.repoTecnologia.obterTecnologias()
	}

	@Get("destaques")
	async obterDestaques(): Promise<Tecnologia[]> {
		return this.repoTecnologia.obterDestaques()
	}
}
