import React from 'react';
const LABEL_31379 = 'component_31379';
export function Component31379({ value = 31379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31379, 'data-value': derived.doubled }, children);
}
export default Component31379;
