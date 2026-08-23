import React from 'react';
const LABEL_6477 = 'component_6477';
export function Component6477({ value = 6477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6477, 'data-value': derived.doubled }, children);
}
export default Component6477;
