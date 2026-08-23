import React from 'react';
const LABEL_24605 = 'component_24605';
export function Component24605({ value = 24605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24605, 'data-value': derived.doubled }, children);
}
export default Component24605;
