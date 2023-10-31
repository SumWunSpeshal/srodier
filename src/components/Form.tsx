import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';

export function Form() {
  const [message, setMessage] = useState('');

  const form = useMemo(
    () => ({
      message,
    }),
    [message],
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
