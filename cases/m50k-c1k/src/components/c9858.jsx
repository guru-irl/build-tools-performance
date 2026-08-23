import React from 'react';
const LABEL_9858 = 'component_9858';
export function Component9858({ value = 9858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9858, 'data-value': derived.doubled }, children);
}
export default Component9858;
