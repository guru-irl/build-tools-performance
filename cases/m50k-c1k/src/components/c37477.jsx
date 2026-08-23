import React from 'react';
const LABEL_37477 = 'component_37477';
export function Component37477({ value = 37477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37477, 'data-value': derived.doubled }, children);
}
export default Component37477;
