import React from 'react';
const LABEL_18500 = 'component_18500';
export function Component18500({ value = 18500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18500, 'data-value': derived.doubled }, children);
}
export default Component18500;
