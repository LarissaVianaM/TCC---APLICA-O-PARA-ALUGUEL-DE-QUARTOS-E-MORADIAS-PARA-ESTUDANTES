import multer from "multer";
import { resolve } from 'path';
import crypto from 'crypto';

export default {
  
  upload(folter: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folter),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const filename = `${fileHash}-${file.originalname}`;

          return callback(null, filename);
        },
      }),
    };
  },
};