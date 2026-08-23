import React from 'react';
const LABEL_22477 = 'component_22477';
export function Component22477({ value = 22477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22477, 'data-value': derived.doubled }, children);
}
export default Component22477;
