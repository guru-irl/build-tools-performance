import React from 'react';
const LABEL_9876 = 'component_9876';
export function Component9876({ value = 9876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9876, 'data-value': derived.doubled }, children);
}
export default Component9876;
