import React from 'react';
const LABEL_4633 = 'component_4633';
export function Component4633({ value = 4633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4633, 'data-value': derived.doubled }, children);
}
export default Component4633;
