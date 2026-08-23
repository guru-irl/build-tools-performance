import React from 'react';
const LABEL_29361 = 'component_29361';
export function Component29361({ value = 29361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29361, 'data-value': derived.doubled }, children);
}
export default Component29361;
