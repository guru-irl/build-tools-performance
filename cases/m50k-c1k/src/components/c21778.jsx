import React from 'react';
const LABEL_21778 = 'component_21778';
export function Component21778({ value = 21778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21778, 'data-value': derived.doubled }, children);
}
export default Component21778;
