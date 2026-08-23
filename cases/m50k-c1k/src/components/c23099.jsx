import React from 'react';
const LABEL_23099 = 'component_23099';
export function Component23099({ value = 23099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23099, 'data-value': derived.doubled }, children);
}
export default Component23099;
