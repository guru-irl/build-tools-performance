import React from 'react';
const LABEL_40477 = 'component_40477';
export function Component40477({ value = 40477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40477, 'data-value': derived.doubled }, children);
}
export default Component40477;
