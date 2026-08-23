import React from 'react';
const LABEL_6955 = 'component_6955';
export function Component6955({ value = 6955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6955, 'data-value': derived.doubled }, children);
}
export default Component6955;
