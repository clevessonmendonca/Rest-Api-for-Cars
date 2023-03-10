import { Request, Response } from 'express';
import CarModel from '../database/CarModel';

export const CarController = {
    async index(req: Request, res: Response): Promise<Response> {
        let cars = await CarModel.find()
        return res.json(cars)
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        let car = await CarModel.findById(id)
        return res.json(car)
    },

    async create(req: Request, res: Response): Promise<Response> {
        const { 
            marca,
            modelo,
            versao,
            ano,
            quilometragem,
            tipoCambio,
            precoVendo
         } = req.body

        let car = await CarModel.create(req.body)
        .then(data => {
            return res.json(data)
        })
        .catch(error => {
            return res.status(400).json(error.original)
        })
        
        return res.status(500)
    },

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { marca, modelo, versao, ano, quilometragem, tipoCambio, precoVenda } = req.body

        await Car.findByIdAndUpdate(id, {
            marca: marca,
            modelo: modelo,
            versao: versao,
            ano: ano,
            quilometragem: quilometragem,
            tipoCambio: tipoCambio,
            precoVenda: precoVenda
        }).then(data => {
            return res.json(data)
        })
        .catch(error => {
            return res.status(400).json(error.original)
        })

        return res.status(500)
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        let car = await CarModel.findByIdAndDelete(id)
        .then(data => {
            return res.json({ message: `${id} exluido com sucesso!` })
        })
        .catch(error => {
            return res.status(400).json(error.original)
        })
        
        return res.status(500)
    },
}