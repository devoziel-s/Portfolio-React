export const Contact = () => (
  <div className="p-4">
    <h1 className="text-4xl mb-4">Contact Me</h1>
    <form className="flex flex-col">
      <input className="p-2 mb-2 border" type="text" placeholder="Name" />
      <input className="p-2 mb-2 border" type="email" placeholder="Email" />
      <textarea className="p-2 mb-2 border" placeholder="Message"></textarea>
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">Send</button>
    </form>
  </div>
);