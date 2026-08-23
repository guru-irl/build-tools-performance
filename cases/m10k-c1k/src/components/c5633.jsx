import React from 'react';
const LABEL_5633 = 'component_5633';
export function Component5633({ value = 5633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5633, 'data-value': derived.doubled }, children);
}
export default Component5633;
