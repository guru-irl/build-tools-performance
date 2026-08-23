import React from 'react';
const LABEL_23689 = 'component_23689';
export function Component23689({ value = 23689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23689, 'data-value': derived.doubled }, children);
}
export default Component23689;
