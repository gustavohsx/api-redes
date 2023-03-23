import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete, Put, Header } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll()  {
        return 'Todos os Usuarios';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Exibindo - Usuario ${id}`;
    }

    @Post()
    @Header('Header-Opcional', 'true')
    createUser(@Body() body) {
        return `Nome: ${body.name} <br> Idade: ${body.age}`;
    }

    @Post('create')
    @HttpCode(HttpStatus.NO_CONTENT) // Retorna HTTP 204 - no content
    createOneUser(@Body() body) {
        return 'Usuario Criado';
    }

    @Patch(':id')
    updatePatch(@Param('id') id: string, @Body() body) {
        return `Usuario ${id} atualizado! <br>Metodo Patch`;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `Removido Usuario ${id}`;
    }

    @Put(':id')
    updatePut(@Param('id') id: string, @Body() body) {
        return `Usuario ${id} atualizado! <br>Metodo Put`;
    }
}
