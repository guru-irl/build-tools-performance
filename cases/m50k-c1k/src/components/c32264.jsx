import React from 'react';
const LABEL_32264 = 'component_32264';
export function Component32264({ value = 32264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32264, 'data-value': derived.doubled }, children);
}
export default Component32264;
