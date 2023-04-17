import { MigrationInterface, QueryRunner } from "typeorm";

export class migrate1681464687847 implements MigrationInterface {
    name = 'migrate1681464687847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "price" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "price" SET NOT NULL`);
    }

}
