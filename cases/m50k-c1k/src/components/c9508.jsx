import React from 'react';
const LABEL_9508 = 'component_9508';
export function Component9508({ value = 9508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9508, 'data-value': derived.doubled }, children);
}
export default Component9508;
