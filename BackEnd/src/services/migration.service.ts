import { Injectable } from '@nestjs/common';
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { async } from 'rxjs';


@Injectable()
export class MigrationService {
    
    async doMigrate(){
        try {
            const client = new S3Client({
              region: "us-west-1"
            })
            const command = new GetObjectCommand({ Bucket: "bucket-milio", Key: "Prueba MILIO.pdf" });
            const response = await client.send(command);
            const str = await response.Body.transformToString;
            console.log("Aquí!    "+str);
          } catch (err) {
            console.error("Aquí error")
            console.error(err);
          }
    }

}