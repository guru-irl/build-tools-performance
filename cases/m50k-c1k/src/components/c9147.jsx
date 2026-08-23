import React from 'react';
const LABEL_9147 = 'component_9147';
export function Component9147({ value = 9147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9147, 'data-value': derived.doubled }, children);
}
export default Component9147;
