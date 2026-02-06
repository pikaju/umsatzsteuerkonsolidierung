import { useState } from 'react';

export function Companies() {
  const [companies, setCompanies] = useState<string[]>([]);
  const [newCompanyName, setNewCompanyName] = useState('');

  const addCompany = () => {
    if (newCompanyName.trim()) {
      setCompanies([...companies, newCompanyName]);
      setNewCompanyName('');
    }
  };

  const removeCompany = (index: number) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Companies</h2>
      <div>
        <input
          type="text"
          value={newCompanyName}
          onChange={(e) => setNewCompanyName(e.target.value)}
          placeholder="Company name"
        />
        <button onClick={addCompany}>Add Company</button>
      </div>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company}
            <button onClick={() => removeCompany(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Company() {
	return <textarea></textarea>;
}
