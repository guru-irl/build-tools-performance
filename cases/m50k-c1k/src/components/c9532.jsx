import React from 'react';
const LABEL_9532 = 'component_9532';
export function Component9532({ value = 9532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9532, 'data-value': derived.doubled }, children);
}
export default Component9532;
