# Mart ID

Generates unique identifiers quickly and easily. Ideal for databases, sessions, and more.

## Installation

To install Mart ID, use npm or yarn:

```bash
npm i mart-id
```
## Usage

Here's a basic example of how to use Mart ID to generate a unique identifier:

```typescript
import { mid } from 'mart-id';

const newId = mid();
console.log('Generated ID:', newId);
```

## API

### `mid(options?: Options): string`

Generates a random unique identifier with customizable options.

**Parameters:**

- `options` (optional): An object with the following properties:
  - `prefix` (string | null, default `null`): The selected prefix for the ID.
  - `length` (number, default `8`): The length of the generated part of the ID (excluding the prefix).
  - `charactersSet` (`"all" | "numbers" | "letters"`, default `"all"`): The character set to use.
  - `includeChars` (string): Additional characters to include in the character set.
  - `excludeChars` (string): Characters to exclude from the character set.

**Returns:**

- `string`: The generated ID. The total length of the ID will be equal to the length of the prefix plus the specified length.

**Example:**

```typescript
// Example 1: Using default parameters
// Default parameters: { prefix: null, length: 8, charactersSet: "all" }
const generatedId = mid();
console.log(generatedId); // Outputs something like 'oVnm1k2J'

// Example 2: Using custom parameters
const customId = mid({ prefix: "PVOC", length: 16, charactersSet: "all" });
console.log(customId); // Outputs something like 'PVOC1hgJks7d5jT2'
```

## Contributing

If you'd like to contribute to Mart ID, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License

Mart ID is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
