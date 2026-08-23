import React from 'react';
const LABEL_13792 = 'component_13792';
export function Component13792({ value = 13792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13792, 'data-value': derived.doubled }, children);
}
export default Component13792;
