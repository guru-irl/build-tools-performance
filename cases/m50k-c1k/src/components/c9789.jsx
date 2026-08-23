import React from 'react';
const LABEL_9789 = 'component_9789';
export function Component9789({ value = 9789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9789, 'data-value': derived.doubled }, children);
}
export default Component9789;
