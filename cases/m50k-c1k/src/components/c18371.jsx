import React from 'react';
const LABEL_18371 = 'component_18371';
export function Component18371({ value = 18371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18371, 'data-value': derived.doubled }, children);
}
export default Component18371;
