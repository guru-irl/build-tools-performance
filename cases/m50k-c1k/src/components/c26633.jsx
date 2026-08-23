import React from 'react';
const LABEL_26633 = 'component_26633';
export function Component26633({ value = 26633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26633, 'data-value': derived.doubled }, children);
}
export default Component26633;
