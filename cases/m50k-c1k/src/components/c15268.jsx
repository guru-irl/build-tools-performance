import React from 'react';
const LABEL_15268 = 'component_15268';
export function Component15268({ value = 15268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15268, 'data-value': derived.doubled }, children);
}
export default Component15268;
