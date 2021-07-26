import useForm from '../lib/useForm';

export default function CreateProduct() {
  // const [name, setName] = useState('Wes');
  // const [price, setPrice] = useState(0);
  const { inputs, handleChange } = useForm({
    name: 'Nice Shoes',
    price: 50,
    description: 'Best shoes',
  });
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Name
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
