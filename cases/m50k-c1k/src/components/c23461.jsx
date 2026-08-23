import React from 'react';
const LABEL_23461 = 'component_23461';
export function Component23461({ value = 23461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23461, 'data-value': derived.doubled }, children);
}
export default Component23461;
