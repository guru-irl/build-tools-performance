import React from 'react';
const LABEL_9919 = 'component_9919';
export function Component9919({ value = 9919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9919, 'data-value': derived.doubled }, children);
}
export default Component9919;
