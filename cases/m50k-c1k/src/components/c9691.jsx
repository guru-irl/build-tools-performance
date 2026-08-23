import React from 'react';
const LABEL_9691 = 'component_9691';
export function Component9691({ value = 9691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9691, 'data-value': derived.doubled }, children);
}
export default Component9691;
