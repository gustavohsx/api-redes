import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete, Put, Header } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    @Header('END-POINT', 'GET')
    findAll()  {
        return 'Todos os Usuarios';
    }

    @Get(':id')
    @Header('END-POINT', 'GET')
    findOne(@Param('id') id: string) {
        return `Exibindo - Usuario ${id}`;
    }

    @Post()
    @Header('END-POINT', 'POST')
    createUser(@Body() body) {
        return `Nome: ${body.name} <br> Idade: ${body.age}`;
    }

    @Post('create')
    @Header('END-POINT', 'POST')
    @HttpCode(HttpStatus.NO_CONTENT) // Retorna HTTP 204 - no content
    createOneUser(@Body() body) {
        return `Usuario Criado<br>${body}`;
    }

    @Patch(':id')
    @Header('END-POINT', 'PATCH')
    updatePatch(@Param('id') id: string, @Body() body) {
        return `Usuario ${id} atualizado! ${body}<br>Metodo Patch`;
    }

    @Delete(':id')
    @Header('END-POINT', 'DELETE')
    remove(@Param('id') id: string){
        return `Removido Usuario ${id}`;
    }

    @Put(':id')
    @Header('END-POINT', 'PUT')
    updatePut(@Param('id') id: string, @Body() body) {
        return `Usuario ${id} atualizado! ${body}<br>Metodo Put`;
    }
}
