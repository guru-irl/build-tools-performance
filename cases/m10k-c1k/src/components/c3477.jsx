import React from 'react';
const LABEL_3477 = 'component_3477';
export function Component3477({ value = 3477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3477, 'data-value': derived.doubled }, children);
}
export default Component3477;
