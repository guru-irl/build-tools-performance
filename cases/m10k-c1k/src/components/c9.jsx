import React from 'react';
const LABEL_9 = 'component_9';
export function Component9({ value = 9, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9, 'data-value': derived.doubled }, children);
}
export default Component9;
