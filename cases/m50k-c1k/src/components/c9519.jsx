import React from 'react';
const LABEL_9519 = 'component_9519';
export function Component9519({ value = 9519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9519, 'data-value': derived.doubled }, children);
}
export default Component9519;
