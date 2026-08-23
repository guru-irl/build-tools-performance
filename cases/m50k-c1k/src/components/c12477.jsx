import React from 'react';
const LABEL_12477 = 'component_12477';
export function Component12477({ value = 12477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12477, 'data-value': derived.doubled }, children);
}
export default Component12477;
