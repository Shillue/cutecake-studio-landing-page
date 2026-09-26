import { carregarProdutos } from "./components/carregarProdutos.js";
import { carrossel } from "./components/carrossel.js";
import { categorias } from "./components/categorias.js";
import { carregarCatalogo } from "./components/carregarCatalogo.js";
import { toggleCatalogo } from "./components/toggleCatalogo.js";
import {menu} from "./components/menu.js";

async function iniciarApp() {
    await carregarProdutos();

    const controleCarrossel = carrossel();

    categorias(controleCarrossel.atualizarLimite);

    await carregarCatalogo();

    toggleCatalogo();

    menu();
}

iniciarApp();