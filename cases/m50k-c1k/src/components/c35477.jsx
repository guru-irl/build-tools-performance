import React from 'react';
const LABEL_35477 = 'component_35477';
export function Component35477({ value = 35477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35477, 'data-value': derived.doubled }, children);
}
export default Component35477;
