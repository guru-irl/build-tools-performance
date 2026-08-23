import React from 'react';
const LABEL_9126 = 'component_9126';
export function Component9126({ value = 9126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9126, 'data-value': derived.doubled }, children);
}
export default Component9126;
