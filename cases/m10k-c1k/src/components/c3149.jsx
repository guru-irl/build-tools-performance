import React from 'react';
const LABEL_3149 = 'component_3149';
export function Component3149({ value = 3149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3149, 'data-value': derived.doubled }, children);
}
export default Component3149;
