import React from 'react';
const LABEL_33477 = 'component_33477';
export function Component33477({ value = 33477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33477, 'data-value': derived.doubled }, children);
}
export default Component33477;
