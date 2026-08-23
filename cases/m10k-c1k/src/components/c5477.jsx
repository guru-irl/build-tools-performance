import React from 'react';
const LABEL_5477 = 'component_5477';
export function Component5477({ value = 5477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5477, 'data-value': derived.doubled }, children);
}
export default Component5477;
