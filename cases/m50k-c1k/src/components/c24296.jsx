import React from 'react';
const LABEL_24296 = 'component_24296';
export function Component24296({ value = 24296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24296, 'data-value': derived.doubled }, children);
}
export default Component24296;
