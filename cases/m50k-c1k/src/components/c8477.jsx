import React from 'react';
const LABEL_8477 = 'component_8477';
export function Component8477({ value = 8477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8477, 'data-value': derived.doubled }, children);
}
export default Component8477;
