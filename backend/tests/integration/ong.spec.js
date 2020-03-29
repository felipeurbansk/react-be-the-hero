const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('Criação de uma nova ONG no banco de dados', async () => {
        const response = await request(app)

        .post('/ongs')
        .send({
            name: "Justm",
            email: "justm@contato.com.br",
            whatsapp: "(41) 92365-7745",
            city: "Itapeva",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})