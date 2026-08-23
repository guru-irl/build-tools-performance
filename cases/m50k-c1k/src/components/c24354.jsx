import React from 'react';
const LABEL_24354 = 'component_24354';
export function Component24354({ value = 24354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24354, 'data-value': derived.doubled }, children);
}
export default Component24354;
