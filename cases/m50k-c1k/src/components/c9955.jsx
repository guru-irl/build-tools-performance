import React from 'react';
const LABEL_9955 = 'component_9955';
export function Component9955({ value = 9955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9955, 'data-value': derived.doubled }, children);
}
export default Component9955;
