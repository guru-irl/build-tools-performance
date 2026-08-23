import React from 'react';
const LABEL_10477 = 'component_10477';
export function Component10477({ value = 10477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10477, 'data-value': derived.doubled }, children);
}
export default Component10477;
