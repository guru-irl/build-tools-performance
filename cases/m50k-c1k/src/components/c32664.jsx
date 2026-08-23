import React from 'react';
const LABEL_32664 = 'component_32664';
export function Component32664({ value = 32664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32664, 'data-value': derived.doubled }, children);
}
export default Component32664;
