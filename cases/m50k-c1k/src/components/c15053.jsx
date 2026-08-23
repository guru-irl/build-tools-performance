import React from 'react';
const LABEL_15053 = 'component_15053';
export function Component15053({ value = 15053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15053, 'data-value': derived.doubled }, children);
}
export default Component15053;
