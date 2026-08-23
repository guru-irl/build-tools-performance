import React from 'react';
const LABEL_9750 = 'component_9750';
export function Component9750({ value = 9750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9750, 'data-value': derived.doubled }, children);
}
export default Component9750;
