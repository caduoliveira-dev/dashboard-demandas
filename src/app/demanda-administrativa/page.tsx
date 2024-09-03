import dbClient from "@/db/mongodb"

import { redirect } from "next/navigation"

import Link from "next/link"

import {
    CircleUser,
    CalendarIcon,
    Search,
    Menu,
    Package2,
  } from "lucide-react"


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button, buttonVariants } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { Input } from "@/components/ui/input"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
  } from "@/components/ui/table"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea"

export default function DemandaAdministrativa(){

    // server action

    const createDemanda = async (formData: FormData) => {
        "use server"
        const dataCadastro = formData.get('data-cadastro') as string
        const sgd = formData.get('sgd') as string
        const assunto = formData.get('assunto') as string
        const orgao = formData.get('orgao') as string
        const municipio = formData.get('municipio') as string
        const paciente = formData.get('paciente') as string
        const solicitante = formData.get('solicitante') as string
        const dataVencimento = formData.get('data-vencimento') as string

        const demanda = await dbClient
        .db('demandas')
        .collection('demanda-administrativa')
        .insertOne(
        {dataCadastro,
        sgd,
        assunto,
        orgao,
        municipio,
        paciente,
        solicitante,
        dataVencimento})
    

    }

    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <header className="top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        href="/"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/demanda-administrativa"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Demandas Administrativas
                    </Link>
                    <Link
                        href="/demanda-judicial"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Demandas Judiciais
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Controle de Auditoria
                    </Link>
                    </nav>
                    <Sheet>
                    <SheetTrigger asChild>
                        <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                        >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground">
                            Dashboard
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Demandas Administrativas
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Demandas Judiciais
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Controle de Auditoria
                        </Link>
                        </nav>
                    </SheetContent>
                    </Sheet>
                    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Configuracoes</DropdownMenuItem>
                        <DropdownMenuItem>Suporte</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className={buttonVariants({variant: "destructive", width: "lg"})}>Sair</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                </header>

                <div className="flex flex-row items-center justify-between p-8">
                    <h1 className="text-2xl font-bold">Demandas Administrativas</h1>
                    
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Inserir Demanda</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[720px]">
                            <DialogHeader>
                            <DialogTitle>Inserir Demanda Administrativa</DialogTitle>
                            <DialogDescription>
                                Preencha todos os campos.
                            </DialogDescription>
                            </DialogHeader>
                            <form action={createDemanda}>
                                <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="data-cadastro" className="text-right">
                                    Data do Cadastro
                                    </Label>
                                    <Input
                                    type="date"
                                    name="data-cadastro"
                                    id="data-cadastro"
                                    className="col-span-1"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="sgd" className="text-right">
                                    SGD:
                                    </Label>
                                    <Input
                                    name="sgd"
                                    id="sgd"
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <Label htmlFor="assunto" className="text-right">
                                    Assunto:
                                    </Label>
                                    <Textarea name="assunto" id="assunto" className="col-span-3 h-48" placeholder="Assunto da demanda">

                                    </Textarea>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="orgao" className="text-right">
                                    Orgão:
                                    </Label>
                                    <Input
                                    name="orgao"
                                    id="orgao"
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="municipio" className="text-right">
                                    Município:
                                    </Label>
                                    <Input
                                    name="municipio"
                                    id="municipio"
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="paciente" className="text-right">
                                    Paciente:
                                    </Label>
                                    <Input
                                    name="paciente"
                                    id="paciente"
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="solicitante" className="text-right">
                                    Solicitante:
                                    </Label>
                                    <Input
                                    name="solicitante"
                                    id="solicitante"
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="data-vencimento" className="text-right">
                                    Data de Vencimento
                                    </Label>
                                    <Input
                                    type="date"
                                    name="data-vencimento"
                                    id="data-vencimento"
                                    className="col-span-1"
                                    />
                                    
                                </div>
                                </div>
                            <DialogFooter className="flex flex-row justify-end">
                            <Button className="pr-4" type="submit" variant="destructive">Cancelar</Button>
                                <Button type="submit">Inserir</Button>
                            </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                    
                </div>

                <div className="p-8">
                <div className="relative ml-auto mb-2 flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                        type="search"
                        placeholder="Procurar Demanda"
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                        />
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[150px]">Data</TableHead>
                        <TableHead>Solicitante</TableHead>
                        <TableHead>Paciente</TableHead>
                        <TableHead>Orgão</TableHead>
                        <TableHead>Data de Vencimento</TableHead>
                        <TableHead>Assunto</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell>
                        <div className="font-medium">15/08/2024</div>
                        </TableCell>
                        <TableCell>Fulano de tal</TableCell>
                        <TableCell>Ciclano</TableCell>
                        <TableCell>Procuradoria Geral do Estado</TableCell>
                        <TableCell>30/08/2024</TableCell>
                        <TableCell className="w-[300px]">FORNECIMENTO DOS MEDICAMENTOS RITALINA 30MG ÁCIDO VALPRÓICO 500MG ARIPRIPRAZOL 10 MG TOPIRAMATO 50MG E MELATONINA 10MG</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </div>
                
            </div>
        </>
    )
}