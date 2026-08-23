import React from 'react';
const LABEL_18007 = 'component_18007';
export function Component18007({ value = 18007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18007, 'data-value': derived.doubled }, children);
}
export default Component18007;
