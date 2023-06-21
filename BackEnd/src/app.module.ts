import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MigrationController } from './controllers/migration.controller';
import { MigrationService } from './services/migration.service';

@Module({
  imports: [],
  controllers: [AppController, MigrationController],
  providers: [AppService, MigrationService],
})
export class AppModule {}
