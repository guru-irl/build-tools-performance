import React from 'react';
const LABEL_13477 = 'component_13477';
export function Component13477({ value = 13477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13477, 'data-value': derived.doubled }, children);
}
export default Component13477;
