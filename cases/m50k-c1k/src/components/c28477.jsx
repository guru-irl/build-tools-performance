import React from 'react';
const LABEL_28477 = 'component_28477';
export function Component28477({ value = 28477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28477, 'data-value': derived.doubled }, children);
}
export default Component28477;
