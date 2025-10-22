import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductsTable1761132978455 implements MigrationInterface {
    name = 'UpdateProductsTable1761132978455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "stock" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "stock" SET DEFAULT '0'`);
    }

}
