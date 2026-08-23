import React from 'react';
const LABEL_9625 = 'component_9625';
export function Component9625({ value = 9625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9625, 'data-value': derived.doubled }, children);
}
export default Component9625;
