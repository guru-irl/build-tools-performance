import React from 'react';
const LABEL_23203 = 'component_23203';
export function Component23203({ value = 23203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23203, 'data-value': derived.doubled }, children);
}
export default Component23203;
