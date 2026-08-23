import React from 'react';
const LABEL_17891 = 'component_17891';
export function Component17891({ value = 17891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17891, 'data-value': derived.doubled }, children);
}
export default Component17891;
