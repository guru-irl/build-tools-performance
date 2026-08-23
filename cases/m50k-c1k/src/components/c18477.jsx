import React from 'react';
const LABEL_18477 = 'component_18477';
export function Component18477({ value = 18477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18477, 'data-value': derived.doubled }, children);
}
export default Component18477;
