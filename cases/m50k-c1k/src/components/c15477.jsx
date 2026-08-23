import React from 'react';
const LABEL_15477 = 'component_15477';
export function Component15477({ value = 15477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15477, 'data-value': derived.doubled }, children);
}
export default Component15477;
