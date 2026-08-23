import React from 'react';
const LABEL_26792 = 'component_26792';
export function Component26792({ value = 26792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26792, 'data-value': derived.doubled }, children);
}
export default Component26792;
