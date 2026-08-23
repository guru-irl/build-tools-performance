import React from 'react';
const LABEL_9161 = 'component_9161';
export function Component9161({ value = 9161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9161, 'data-value': derived.doubled }, children);
}
export default Component9161;
