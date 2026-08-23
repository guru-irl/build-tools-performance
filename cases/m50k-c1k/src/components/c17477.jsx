import React from 'react';
const LABEL_17477 = 'component_17477';
export function Component17477({ value = 17477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17477, 'data-value': derived.doubled }, children);
}
export default Component17477;
