import React from 'react';
const LABEL_9882 = 'component_9882';
export function Component9882({ value = 9882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9882, 'data-value': derived.doubled }, children);
}
export default Component9882;
