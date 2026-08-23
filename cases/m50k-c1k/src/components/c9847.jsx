import React from 'react';
const LABEL_9847 = 'component_9847';
export function Component9847({ value = 9847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9847, 'data-value': derived.doubled }, children);
}
export default Component9847;
