# PokeAngular

PokeAngular es una aplicación Angular que permite explorar y administrar información sobre Pokémon utilizando la API pública [pokeapi.co](https://pokeapi.co/). La aplicación incluye una lista paginada de Pokémon, una vista detallada de cada Pokémon, una versión móvil responsive y funcionalidades de gestión de favoritos.

## Funcionalidades Principales

- Lista paginada de Pokémon con filtrado por nombre y autocompletado.
- Vista detallada de cada Pokémon, incluyendo su nombre, tipo, habilidades y más.
- Versión móvil responsive para una experiencia de usuario óptima en dispositivos móviles.
- Tabla resumen que muestra la cantidad de Pokémon que comienzan con cada letra del abecedario.
- Capacidad de seleccionar Pokémon como favoritos y visualizar sus detalles en la parte superior del sitio.
- Diálogo/modal para mostrar información detallada de Pokémon favoritos.

## Capturas de Pantalla
![sc1](https://github.com/Francortiz-137/pokeAngular/assets/85177793/3ba23970-4f12-4562-9606-6ff33d1907f9)
![sc2](https://github.com/Francortiz-137/pokeAngular/assets/85177793/05ca51eb-9193-4862-a6a9-8b719882af5d)
![sc3](https://github.com/Francortiz-137/pokeAngular/assets/85177793/0be73d08-55aa-4e14-b6df-bf414a851342)
![sc4](https://github.com/Francortiz-137/pokeAngular/assets/85177793/4fe5e4c3-c014-4d17-bc7e-142f623edb39)
![sc5](https://github.com/Francortiz-137/pokeAngular/assets/85177793/fb61e198-85ae-45f3-938b-020dcd29054b)
![sc6](https://github.com/Francortiz-137/pokeAngular/assets/85177793/e1c933ab-cfed-4108-9c3f-285c156af4ed)

## Tecnologías Utilizadas

- Angular CLI: 16.2.3
- Node: 18.18.0
- Package Manager: npm 10.1.0
- OS: Windows 10 x64
- Bootstrap para estilos y componentes CSS.
- FontAwesome para iconos
- ng-bootstrap para el manejo del dialog/modal
- HttpClient para realizar solicitudes a la API de Pokémon.
- Redux (NgRx) para la gestión del estado de los Pokémon favoritos.

## Instalación y Uso

1. Navega al directorio del proyecto.
    
    ```bash
    cd poke-angular
    ```
    
2. Instala las dependencias.
    
    ```bash
    npm install
    ```
    
3. Inicia la aplicación.

    
    ```bash
    ng serve
    ```
    
4. Abre tu navegador web y visita **[http://localhost:4200](http://localhost:4200/)** para utilizar la aplicación.

Puedes ver la aplicacion funcionando en: https://poke-angular-francortiz-137.vercel.app
