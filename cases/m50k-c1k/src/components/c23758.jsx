import React from 'react';
const LABEL_23758 = 'component_23758';
export function Component23758({ value = 23758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23758, 'data-value': derived.doubled }, children);
}
export default Component23758;
