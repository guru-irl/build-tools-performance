import React from 'react';
const LABEL_9973 = 'component_9973';
export function Component9973({ value = 9973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9973, 'data-value': derived.doubled }, children);
}
export default Component9973;
