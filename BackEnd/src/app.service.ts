import { Injectable } from '@nestjs/common';
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  
}
