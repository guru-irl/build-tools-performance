import React from 'react';
const LABEL_23816 = 'component_23816';
export function Component23816({ value = 23816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23816, 'data-value': derived.doubled }, children);
}
export default Component23816;
