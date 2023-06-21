import { Controller, Post } from '@nestjs/common';
import { MigrationService } from 'src/services/migration.service';

@Controller('migration')
export class MigrationController {

    constructor(private readonly migrationService: MigrationService) {}

    @Post('doMigrate')
    async doMigrate(){
        this.migrationService.doMigrate();
      }
}
