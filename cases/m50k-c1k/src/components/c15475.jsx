import React from 'react';
const LABEL_15475 = 'component_15475';
export function Component15475({ value = 15475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15475, 'data-value': derived.doubled }, children);
}
export default Component15475;
