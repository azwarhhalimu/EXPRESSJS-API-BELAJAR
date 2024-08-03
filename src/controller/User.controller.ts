import { Request, Response } from "express";
import prismaService from "../configuration/prisma.services";
import { produk } from "@prisma/client";

const prisma = prismaService;

class UserController {
  async getUser(req: Request, res: Response) {
    res.send("ini adalah halam aget user");
  }
  async getProduk(req: Request, res: Response) {
    const getData = await prisma.produk.findMany({
      select: {
        id_produk: true,
        nama_produk: true,
      },
      orderBy: {
        create_at: "desc",
      },
    });
    res.json({
      data: getData,
    });
  }
  async saveProduk(req: Request, res: Response) {
    const body: produk = req.body;
    const simpan = await prisma.produk.create({
      data: {
        nama_produk: body.nama_produk,
        harga: Number(body.harga),
        stok: Number(body.stok),
      },
    });
    res.json({
      status: simpan ? "success" : "gagal",
      data: simpan,
    });
  }

  async deleteProduk(req: Request, res: Response) {
    const { id } = req.params;
    const cek_data = await prisma.produk.findFirst({
      where: {
        id_produk: Number(id),
      },
    });
    if (cek_data) {
      await prisma.produk.delete({
        where: {
          id_produk: Number(id),
        },
      });
    }

    res.json({
      status: cek_data ? "success_deleted" : "gagal",
      data: cek_data,
    });
  }
  async updateProduk(req: Request, res: Response) {
    const body: produk = req.body;
    const id = req.params.id;
    const update = await prisma.produk.update({
      data: {
        nama_produk: body.nama_produk,
        harga: Number(body.harga),
        stok: Number(body.stok),
      },
      where: {
        id_produk: Number(id),
      },
    });
    res.json({
      status: update ? "success_updated" : "gagal",
      data: update,
    });
  }
}

export default new UserController();
