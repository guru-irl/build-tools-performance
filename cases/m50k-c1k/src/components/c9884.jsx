import React from 'react';
const LABEL_9884 = 'component_9884';
export function Component9884({ value = 9884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9884, 'data-value': derived.doubled }, children);
}
export default Component9884;
