import React from 'react';
const LABEL_18484 = 'component_18484';
export function Component18484({ value = 18484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18484, 'data-value': derived.doubled }, children);
}
export default Component18484;
