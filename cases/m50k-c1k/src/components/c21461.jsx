import React from 'react';
const LABEL_21461 = 'component_21461';
export function Component21461({ value = 21461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21461, 'data-value': derived.doubled }, children);
}
export default Component21461;
