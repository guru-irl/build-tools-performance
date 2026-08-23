import React from 'react';
const LABEL_39477 = 'component_39477';
export function Component39477({ value = 39477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39477, 'data-value': derived.doubled }, children);
}
export default Component39477;
