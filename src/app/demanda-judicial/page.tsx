"use client"
import { useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import Link from "next/link"

import {
    CircleUser,
    CalendarIcon,
    Search,
    Menu,
    Package2,
  } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"

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

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { cn } from "@/lib/utils"

import { Textarea } from "@/components/ui/textarea"

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

export default function DemandaAdministrativa(){
    const [date, setDate] = useState<Date>()
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
                        <Link href="/" className="hover:text-foreground">
                            Dashboard
                        </Link>
                        <Link
                            href="/demanda-administrativa"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Demandas Administrativas
                        </Link>
                        <Link
                            href="/demanda-judicial"
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
                    <h1 className="text-2xl font-bold">Demandas Judiciais</h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Inserir Demanda</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[720px]">
                            <DialogHeader>
                            <DialogTitle>Inserir Demanda Judicial</DialogTitle>
                            <DialogDescription>
                                Preencha todos os campos.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="data-cadastro" className="text-right">
                                Data do Cadastro
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        locale={ptBR}
                                        />
                                    </PopoverContent>
                            </Popover>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="sgd" className="text-right">
                                SGD:
                                </Label>
                                <Input
                                id="sgd"
                                className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <Label htmlFor="assunto" className="text-right">
                                Assunto:
                                </Label>
                                <Textarea className="col-span-3 h-48" placeholder="Assunto da demanda">

                                </Textarea>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="orgao" className="text-right">
                                Orgão:
                                </Label>
                                <Input
                                id="orgao"
                                className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="municipio" className="text-right">
                                Município:
                                </Label>
                                <Input
                                id="municipio"
                                className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="paciente" className="text-right">
                                Paciente:
                                </Label>
                                <Input
                                id="paciente"
                                className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="solicitante" className="text-right">
                                Solicitante:
                                </Label>
                                <Input
                                id="solicitante"
                                className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="data-vencimento" className="text-right">
                                Data de Vencimento
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        locale={ptBR}
                                        />
                                    </PopoverContent>
                            </Popover>
                            </div>
                            </div>
                            <DialogFooter className="flex flex-row justify-end">
                            <Button className="pr-4" type="submit" variant="destructive">Cancelar</Button>
                            <Button type="submit">Inserir</Button>
                            </DialogFooter>
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
                        <div className="font-medium">31/08/2024</div>
                        </TableCell>
                        <TableCell>Beltrano da SIlva Cardozo</TableCell>
                        <TableCell>Juscelino Kubitschek</TableCell>
                        <TableCell>Ministério Público do Estado do Tocantins</TableCell>
                        <TableCell>15/09/2024</TableCell>
                        <TableCell className="w-[300px]">ENCAMINHAMENTO DE OFICIO N 0318/2024/GAB/27PJC/MPE/TO COM DILEGÊNCIA 25517/2024</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </div>
                
            </div>
        </>
    )
}