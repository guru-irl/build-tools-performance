import React from 'react';
const LABEL_44477 = 'component_44477';
export function Component44477({ value = 44477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44477, 'data-value': derived.doubled }, children);
}
export default Component44477;
