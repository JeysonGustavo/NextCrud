import Image from "next/image";
import Layout from "../components/common/Layout"
import Tabela from "@/components/home/Tabela";
import Cliente from "@/core/Cliente";

const clientes = [
  new Cliente('Bruna', 36, '1'),
  new Cliente('Jeyson', 32, '1'),
  new Cliente('Guilhermina Maluquinha', 9, '1'),
  new Cliente('Maya', 0, '1'),
]

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to bg-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}
