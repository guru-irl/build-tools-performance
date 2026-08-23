import React from 'react';
const LABEL_24471 = 'component_24471';
export function Component24471({ value = 24471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24471, 'data-value': derived.doubled }, children);
}
export default Component24471;
