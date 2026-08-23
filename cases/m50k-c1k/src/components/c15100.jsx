import React from 'react';
const LABEL_15100 = 'component_15100';
export function Component15100({ value = 15100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15100, 'data-value': derived.doubled }, children);
}
export default Component15100;
