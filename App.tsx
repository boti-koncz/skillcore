import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="center">
      <h1 style={{ color: 'black' }}>SkillCore</h1>
      <p>Backend Languages</p>
      <form>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>C#</li>
          <li>Dart</li>
        </ul>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
