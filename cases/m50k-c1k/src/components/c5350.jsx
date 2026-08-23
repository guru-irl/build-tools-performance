import React from 'react';
const LABEL_5350 = 'component_5350';
export function Component5350({ value = 5350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5350, 'data-value': derived.doubled }, children);
}
export default Component5350;
