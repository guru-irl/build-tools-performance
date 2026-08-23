import React from 'react';
const LABEL_9171 = 'component_9171';
export function Component9171({ value = 9171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9171, 'data-value': derived.doubled }, children);
}
export default Component9171;
