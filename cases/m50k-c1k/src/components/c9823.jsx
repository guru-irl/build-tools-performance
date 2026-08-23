import React from 'react';
const LABEL_9823 = 'component_9823';
export function Component9823({ value = 9823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9823, 'data-value': derived.doubled }, children);
}
export default Component9823;
