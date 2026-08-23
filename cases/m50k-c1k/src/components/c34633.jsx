import React from 'react';
const LABEL_34633 = 'component_34633';
export function Component34633({ value = 34633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34633, 'data-value': derived.doubled }, children);
}
export default Component34633;
