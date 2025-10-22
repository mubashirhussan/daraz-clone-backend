import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1761133160739 implements MigrationInterface {
    name = ' $npmConfigName1761133160739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "stock" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "stock" SET DEFAULT '0'`);
    }

}
