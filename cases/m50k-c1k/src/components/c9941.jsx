import React from 'react';
const LABEL_9941 = 'component_9941';
export function Component9941({ value = 9941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9941, 'data-value': derived.doubled }, children);
}
export default Component9941;
