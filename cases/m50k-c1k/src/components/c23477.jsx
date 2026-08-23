import React from 'react';
const LABEL_23477 = 'component_23477';
export function Component23477({ value = 23477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23477, 'data-value': derived.doubled }, children);
}
export default Component23477;
