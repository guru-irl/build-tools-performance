import React from 'react';
const LABEL_633 = 'component_633';
export function Component633({ value = 633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_633, 'data-value': derived.doubled }, children);
}
export default Component633;
