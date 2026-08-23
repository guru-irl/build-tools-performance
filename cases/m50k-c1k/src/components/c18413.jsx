import React from 'react';
const LABEL_18413 = 'component_18413';
export function Component18413({ value = 18413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18413, 'data-value': derived.doubled }, children);
}
export default Component18413;
