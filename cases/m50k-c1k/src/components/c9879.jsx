import React from 'react';
const LABEL_9879 = 'component_9879';
export function Component9879({ value = 9879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9879, 'data-value': derived.doubled }, children);
}
export default Component9879;
