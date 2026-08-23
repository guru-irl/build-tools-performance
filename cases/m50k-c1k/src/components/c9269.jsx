import React from 'react';
const LABEL_9269 = 'component_9269';
export function Component9269({ value = 9269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9269, 'data-value': derived.doubled }, children);
}
export default Component9269;
