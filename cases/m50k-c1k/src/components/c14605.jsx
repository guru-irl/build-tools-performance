import React from 'react';
const LABEL_14605 = 'component_14605';
export function Component14605({ value = 14605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14605, 'data-value': derived.doubled }, children);
}
export default Component14605;
