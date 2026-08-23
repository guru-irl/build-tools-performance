import React from 'react';
const LABEL_26477 = 'component_26477';
export function Component26477({ value = 26477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26477, 'data-value': derived.doubled }, children);
}
export default Component26477;
