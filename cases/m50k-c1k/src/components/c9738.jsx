import React from 'react';
const LABEL_9738 = 'component_9738';
export function Component9738({ value = 9738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9738, 'data-value': derived.doubled }, children);
}
export default Component9738;
