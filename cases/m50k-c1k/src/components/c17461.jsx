import React from 'react';
const LABEL_17461 = 'component_17461';
export function Component17461({ value = 17461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17461, 'data-value': derived.doubled }, children);
}
export default Component17461;
