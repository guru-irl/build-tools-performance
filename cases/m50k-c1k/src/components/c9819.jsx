import React from 'react';
const LABEL_9819 = 'component_9819';
export function Component9819({ value = 9819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9819, 'data-value': derived.doubled }, children);
}
export default Component9819;
