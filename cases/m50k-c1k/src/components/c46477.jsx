import React from 'react';
const LABEL_46477 = 'component_46477';
export function Component46477({ value = 46477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46477, 'data-value': derived.doubled }, children);
}
export default Component46477;
