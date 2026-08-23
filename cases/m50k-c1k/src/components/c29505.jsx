import React from 'react';
const LABEL_29505 = 'component_29505';
export function Component29505({ value = 29505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29505, 'data-value': derived.doubled }, children);
}
export default Component29505;
