import React from 'react';
const LABEL_9917 = 'component_9917';
export function Component9917({ value = 9917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9917, 'data-value': derived.doubled }, children);
}
export default Component9917;
