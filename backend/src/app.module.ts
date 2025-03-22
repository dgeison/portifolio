import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { DbModule } from './db/db.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { ProjetoPrisma } from './projeto/projeto.prisma';
import { ProjetoController } from './projeto/projeto.controller';

@Module({
	imports: [DbModule, ProjetoModule, TecnologiaModule],
	controllers: [AppController, ProjetoController],
	providers: [ProjetoPrisma],
})
export class AppModule {}
