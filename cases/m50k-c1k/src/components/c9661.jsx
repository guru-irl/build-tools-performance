import React from 'react';
const LABEL_9661 = 'component_9661';
export function Component9661({ value = 9661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9661, 'data-value': derived.doubled }, children);
}
export default Component9661;
