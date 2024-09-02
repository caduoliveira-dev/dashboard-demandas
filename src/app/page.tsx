"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  CircleUser,
  Scale,
  BriefcaseBusiness,
  Menu,
  Package2,
  CalendarOff,
} from "lucide-react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description1 = "A donut chart with text"
const chartData = [
  { browser: "Palmas", visitors: 64, fill: "var(--color-chrome)" },
  { browser: "Araguaína", visitors: 41, fill: "var(--color-safari)" },
  { browser: "Porto Nacional", visitors: 28, fill: "var(--color-firefox)" },
  { browser: "Gurupi", visitors: 17, fill: "var(--color-edge)" },
  { browser: "Paraíso", visitors: 18, fill: "var(--color-other)" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { ScrollArea } from "@/components/ui/scroll-area"
export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image. The main content area is divided into two rows. The first row has a grid of cards with statistics. The second row has a grid of cards with a table of recent transactions and a list of recent sales."

export default function Home() {

    const totalVisitors = React.useMemo(() => {
      return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])


  return (
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
            href="#"
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
            href="#"
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
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Demandas Administrativas
              </CardTitle>
              <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Demandas Judiciais
              </CardTitle>
              <Scale className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Demandas Vencidas</CardTitle>
              <CalendarOff className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-2">
                Administrativas / Judiciais
              </p>
            </CardContent>
          </Card>
          {/* <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card> */}
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
          <ScrollArea className="h-80 w-48 md:h-96 md:w-full rounded-xl border">
            <CardHeader className="flex flex-row justify-between">
              <div>
                <CardTitle className="w-16 md:w-72">Relação das Demandas Vencidas</CardTitle>
                <CardDescription>2024</CardDescription>
              </div>
              <div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  Ver todas
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Solicitante</TableHead>
                    <TableHead>Demanda</TableHead>
                    <TableHead className="text-right">Data de Vencimento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">ARTHUR LUIZ PÁDUA MARQUES</div>
                      <div className="hidden text-sm text-muted-foreground md:inline italic">
                      2024/30559/211823
                      </div>
                    </TableCell>
                    <TableCell>Judicial</TableCell>
                    <TableCell className="text-right">30/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">RUI GOMES PEREIRA DA SILVA NETO</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/21592
                      </div>
                    </TableCell>
                    <TableCell>Judicial</TableCell>
                    <TableCell className="text-right">15/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">VIVIAN BARROS DE SOUZA</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/21591
                      </div>
                    </TableCell>
                    <TableCell>Administrativa</TableCell>
                    <TableCell className="text-right">10/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">HETNA BARROS DA SILVA</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/21589
                      </div>
                    </TableCell>
                    <TableCell>Administrativa</TableCell>
                    <TableCell className="text-right">11/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">ÁLVARO LOTUFO MANZANO</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/20912
                      </div>
                    </TableCell>
                    <TableCell>Administrativa</TableCell>
                    <TableCell className="text-right">05/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">RUI GOMES PEREIRA DA SILVA NETO</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/21592
                      </div>
                    </TableCell>
                    <TableCell>Judicial</TableCell>
                    <TableCell className="text-right">15/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">VIVIAN BARROS DE SOUZA</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/21591
                      </div>
                    </TableCell>
                    <TableCell>Administrativa</TableCell>
                    <TableCell className="text-right">10/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">HETNA BARROS DA SILVA</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/21589
                      </div>
                    </TableCell>
                    <TableCell>Administrativa</TableCell>
                    <TableCell className="text-right">11/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">ÁLVARO LOTUFO MANZANO</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/20912
                      </div>
                    </TableCell>
                    <TableCell>Administrativa</TableCell>
                    <TableCell className="text-right">05/08/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">ÁLVARO LOTUFO MANZANO</div>
                      <div className="hidden italic text-sm text-muted-foreground md:inline">
                      2024/30559/20912
                      </div>
                    </TableCell>
                    <TableCell>Administrativa</TableCell>
                    <TableCell className="text-right">05/08/2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </ScrollArea>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row justify-between pb-0">
              <div>
                <CardTitle>Quantidade de Demandas por Município</CardTitle>
                <CardDescription>2024</CardDescription>
              </div>
              <div>
                <Select defaultValue="todas">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Tipo de Demanda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="todas">Todas</SelectItem>
                      <SelectItem value="adm">Administrativa</SelectItem>
                      <SelectItem value="jud">Judicial</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Demandas
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </main>
    </div>
  )
}
