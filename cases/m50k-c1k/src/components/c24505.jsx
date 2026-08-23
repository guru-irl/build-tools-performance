import React from 'react';
const LABEL_24505 = 'component_24505';
export function Component24505({ value = 24505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24505, 'data-value': derived.doubled }, children);
}
export default Component24505;
