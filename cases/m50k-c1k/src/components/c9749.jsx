import React from 'react';
const LABEL_9749 = 'component_9749';
export function Component9749({ value = 9749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9749, 'data-value': derived.doubled }, children);
}
export default Component9749;
