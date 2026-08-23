import React from 'react';
const LABEL_9849 = 'component_9849';
export function Component9849({ value = 9849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9849, 'data-value': derived.doubled }, children);
}
export default Component9849;
