import React from 'react';
const LABEL_21477 = 'component_21477';
export function Component21477({ value = 21477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21477, 'data-value': derived.doubled }, children);
}
export default Component21477;
