import React from 'react';
const LABEL_9825 = 'component_9825';
export function Component9825({ value = 9825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9825, 'data-value': derived.doubled }, children);
}
export default Component9825;
