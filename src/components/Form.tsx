import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useMemo(
    () => ({
      name,
      email,
      message,
    }),
    [name, email, message],
  );

  const formData = useMemo(() => {
    return Object.entries(form).reduce((acc, [key, value]) => {
      acc.append(key, value);
      return acc;
    }, new FormData());
  }, [form]);

  async function submit(e: FormEvent) {
    e.preventDefault();

    const response = await fetch('api/contact', {
      method: 'POST',
      body: formData,
    });
  }

  function setValue(setter: React.Dispatch<React.SetStateAction<string>>) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setter(e.target.value);
  }

  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={setValue(setName)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={setValue(setEmail)}
        />
      </label>
      <label>
        Message
        <textarea
          id="message"
          name="message"
          required
          onChange={setValue(setMessage)}
        />
      </label>
      <button>Send</button>
    </form>
  );
}
