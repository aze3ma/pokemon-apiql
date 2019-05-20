## How to use

Simply get Pokémon's information through queries in GraphQL, example:

```javascript
query {
  pokemon(name: "Pikachu") {
    id
    number
    name
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
```

### Development

```sh
npm run server # Using nodemon for auto-reloading
```