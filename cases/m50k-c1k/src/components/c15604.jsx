import React from 'react';
const LABEL_15604 = 'component_15604';
export function Component15604({ value = 15604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15604, 'data-value': derived.doubled }, children);
}
export default Component15604;
