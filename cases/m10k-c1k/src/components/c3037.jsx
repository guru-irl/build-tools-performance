import React from 'react';
const LABEL_3037 = 'component_3037';
export function Component3037({ value = 3037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3037, 'data-value': derived.doubled }, children);
}
export default Component3037;
