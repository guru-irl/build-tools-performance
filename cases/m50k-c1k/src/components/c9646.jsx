import React from 'react';
const LABEL_9646 = 'component_9646';
export function Component9646({ value = 9646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9646, 'data-value': derived.doubled }, children);
}
export default Component9646;
