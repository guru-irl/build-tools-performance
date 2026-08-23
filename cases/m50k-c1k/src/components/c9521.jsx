import React from 'react';
const LABEL_9521 = 'component_9521';
export function Component9521({ value = 9521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9521, 'data-value': derived.doubled }, children);
}
export default Component9521;
