-- AlterTable
ALTER TABLE "Cabins" ALTER COLUMN "regularPrice" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "discount" DROP NOT NULL,
ALTER COLUMN "discount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "description" DROP NOT NULL;
