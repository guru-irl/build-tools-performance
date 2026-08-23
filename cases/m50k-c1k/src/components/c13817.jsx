import React from 'react';
const LABEL_13817 = 'component_13817';
export function Component13817({ value = 13817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13817, 'data-value': derived.doubled }, children);
}
export default Component13817;
