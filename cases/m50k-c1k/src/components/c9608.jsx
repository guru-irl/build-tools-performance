import React from 'react';
const LABEL_9608 = 'component_9608';
export function Component9608({ value = 9608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9608, 'data-value': derived.doubled }, children);
}
export default Component9608;
