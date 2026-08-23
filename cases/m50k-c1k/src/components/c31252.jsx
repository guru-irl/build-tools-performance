import React from 'react';
const LABEL_31252 = 'component_31252';
export function Component31252({ value = 31252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31252, 'data-value': derived.doubled }, children);
}
export default Component31252;
