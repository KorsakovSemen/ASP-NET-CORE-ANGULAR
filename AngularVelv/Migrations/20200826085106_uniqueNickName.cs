using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularVelv.Migrations
{
    public partial class uniqueNickName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Students_NickName",
                table: "Students",
                column: "NickName",
                unique: true,
                filter: "[NickName] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Students_NickName",
                table: "Students");
        }
    }
}
