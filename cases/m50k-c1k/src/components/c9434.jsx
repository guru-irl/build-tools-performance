import React from 'react';
const LABEL_9434 = 'component_9434';
export function Component9434({ value = 9434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9434, 'data-value': derived.doubled }, children);
}
export default Component9434;
