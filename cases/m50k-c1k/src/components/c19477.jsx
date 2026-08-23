import React from 'react';
const LABEL_19477 = 'component_19477';
export function Component19477({ value = 19477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19477, 'data-value': derived.doubled }, children);
}
export default Component19477;
