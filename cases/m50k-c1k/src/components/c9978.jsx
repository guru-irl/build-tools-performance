import React from 'react';
const LABEL_9978 = 'component_9978';
export function Component9978({ value = 9978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9978, 'data-value': derived.doubled }, children);
}
export default Component9978;
