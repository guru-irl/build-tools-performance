import React from 'react';
const LABEL_9273 = 'component_9273';
export function Component9273({ value = 9273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9273, 'data-value': derived.doubled }, children);
}
export default Component9273;
