import React from 'react';
const LABEL_20379 = 'component_20379';
export function Component20379({ value = 20379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20379, 'data-value': derived.doubled }, children);
}
export default Component20379;
