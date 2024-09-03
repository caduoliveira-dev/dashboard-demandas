'use client'

import { useToast } from "@/hooks/use-toast"
import { useState, useEffect } from 'react'
import { createDemanda, getDemandas, Demanda } from './actions'



import Link from "next/link"

import {
    CircleUser,
    Search,
    Menu,
    Package2,
    PlusCircle,
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
import { DialogClose } from "@radix-ui/react-dialog"

export default function DemandaAdministrativa(){
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [demandas, setDemandas] = useState<Demanda[]>([])
    const [formData, setFormData] = useState<Omit<Demanda, '_id'>>({
        dataCadastro: '',
        sgd: '',
        assunto: '',
        orgao: '',
        municipio: '',
        paciente: '',
        solicitante: '',
        dataVencimento: '',
        resposta: ''
  })

  useEffect(() => {
    fetchDemandas()
  }, [])

  const fetchDemandas = async () => {
    try {
      const fetchedDemandas = await getDemandas()
      setDemandas(fetchedDemandas)
    } catch (error) {
      console.error('Error fetching demandas:', error)
      alert('Falha ao carregar demandas')
    }
  }
    // server actioN
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formDataToSubmit = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
          formDataToSubmit.append(key, value)
        })
        const result = await createDemanda(formDataToSubmit)
        if (result.acknowledged) {
          console.log(`Demanda created with ID: ${result.insertedId}`)
          setFormData({
            dataCadastro: '',
            sgd: '',
            assunto: '',
            orgao: '',
            municipio: '',
            paciente: '',
            solicitante: '',
            dataVencimento: '',
            resposta: ''
          })
          setIsDialogOpen(true)
          toast({
            title: "Sucesso",
            variant: "sucess",
            description: "Demanda Cadastrada",
            duration: 3000,
          })
          fetchDemandas()
        } else {
            toast({
                title: "Erro",
                variant: "destructive",
                description: "Erro ao cadastrar demanda!",
                duration: 3000,
              })
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
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
                    
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="data-cadastro" className="text-right">
                                    Data do Cadastro
                                    </Label>
                                    <Input
                                    type="date"
                                    name="dataCadastro"
                                    id="data-cadastro"
                                    className="col-span-1"
                                    value={formData.dataCadastro}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="sgd" className="text-right">
                                    SGD:
                                    </Label>
                                    <Input
                                    type="text"
                                    name="sgd"
                                    id="sgd"
                                    className="col-span-3"
                                    value={formData.sgd}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <Label htmlFor="assunto" className="text-right">
                                    Assunto:
                                    </Label>
                                    <Textarea 
                                    name="assunto" 
                                    id="assunto" 
                                    className="col-span-3 h-48" 
                                    placeholder="Assunto da demanda"
                                    value={formData.assunto}
                                    onChange={handleInputChange}>

                                    </Textarea>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="orgao" className="text-right">
                                    Orgão:
                                    </Label>
                                    <Input
                                    type="text"
                                    name="orgao"
                                    id="orgao"
                                    className="col-span-3"
                                    value={formData.orgao}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="municipio" className="text-right">
                                    Município:
                                    </Label>
                                    <Input
                                    type="text"
                                    name="municipio"
                                    id="municipio"
                                    className="col-span-3"
                                    value={formData.municipio}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="paciente" className="text-right">
                                    Paciente:
                                    </Label>
                                    <Input
                                    type="text"
                                    name="paciente"
                                    id="paciente"
                                    className="col-span-3"
                                    value={formData.paciente}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="solicitante" className="text-right">
                                    Solicitante:
                                    </Label>
                                    <Input
                                    type="text"
                                    name="solicitante"
                                    id="solicitante"
                                    className="col-span-3"
                                    value={formData.solicitante}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="data-vencimento" className="text-right">
                                    Data de Vencimento
                                    </Label>
                                    <Input
                                    type="date"
                                    name="dataVencimento"
                                    id="data-vencimento"
                                    className="col-span-1"
                                    value={formData.dataVencimento}
                                    onChange={handleInputChange}
                                    />                                  
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    <Label htmlFor="resposta" className="text-right">
                                    Resposta:
                                    </Label>
                                    <Textarea disabled
                                    name="resposta" 
                                    id="resposta" 
                                    className="col-span-3 h-48" 
                                    placeholder=""
                                    value={formData.resposta}
                                    onChange={handleInputChange}>

                                    </Textarea>
                                </div>
                                </div>
                            <DialogFooter className="flex flex-row justify-end">
                                <DialogClose asChild>
                                    <Button className="pr-4" type="button" variant="destructive">Cancelar</Button>
                                </DialogClose>
                                
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
                        <TableHead>Solicitante/SGD</TableHead>
                        <TableHead>Paciente</TableHead>
                        <TableHead>Orgão</TableHead>
                        <TableHead>Data de Vencimento</TableHead>
                        <TableHead className="hidden md:table-cell">Assunto</TableHead>
                        <TableHead className="w=[100px]">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {demandas.map((demanda) => (
                            <TableRow key={demanda._id}>
                                <TableCell>
                                    <div className="font-medium w-[100px]">{demanda.dataCadastro}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium w-[150px]">{demanda.solicitante.toUpperCase()}</div>
                                    <div className="text-sm text-muted-foreground italic">{demanda.sgd}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="w-[150px]">{demanda.paciente.toUpperCase()}</div>
                                </TableCell>
                                <TableCell>{demanda.orgao.toUpperCase()}</TableCell>
                                <TableCell>
                                    <div className="w-[150px]">{demanda.dataVencimento}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="hidden md:table-cell">{demanda.assunto.toUpperCase()}</div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                </div>
                
            </div>
        </>
    )
}