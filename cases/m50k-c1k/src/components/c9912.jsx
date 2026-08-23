import React from 'react';
const LABEL_9912 = 'component_9912';
export function Component9912({ value = 9912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9912, 'data-value': derived.doubled }, children);
}
export default Component9912;
