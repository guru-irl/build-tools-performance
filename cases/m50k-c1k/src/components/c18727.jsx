import React from 'react';
const LABEL_18727 = 'component_18727';
export function Component18727({ value = 18727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18727, 'data-value': derived.doubled }, children);
}
export default Component18727;
