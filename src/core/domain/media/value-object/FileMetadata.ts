import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Nullable } from '../../../shared/type/CommonTypes';
import { CreateFileMetadataValueObjectPayload } from './type/CreateFileMetadataValueObjectPayload';
import { ValueObject } from '../../../shared/value-object/ValueObject';

@Exclude()
export class FileMetadata extends ValueObject {
  
  @Expose()
  @IsString()
  public readonly relativePath: string;
  
  @Expose()
  @IsOptional()
  @IsNumber()
  public readonly size: Nullable<number>;
  
  @Expose()
  @IsOptional()
  @IsString()
  public readonly ext: Nullable<string>;
  
  @Expose()
  @IsOptional()
  @IsString()
  public readonly mimetype: Nullable<string>
  
  constructor(payload?: CreateFileMetadataValueObjectPayload) {
    super();
    
    if (payload) {
      this.relativePath = payload.relativePath;
      this.size = payload.size || null;
      this.ext = payload.ext || null;
      this.mimetype = payload.mimetype || null;
    }
  }
  
  public static async new(payload: CreateFileMetadataValueObjectPayload): Promise<FileMetadata> {
    const file: FileMetadata = new FileMetadata(payload);
    await file.validate();
    
    return file;
  }
  
}