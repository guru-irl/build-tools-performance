import React from 'react';
const LABEL_23792 = 'component_23792';
export function Component23792({ value = 23792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23792, 'data-value': derived.doubled }, children);
}
export default Component23792;
