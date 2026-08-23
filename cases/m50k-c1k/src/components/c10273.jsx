import React from 'react';
const LABEL_10273 = 'component_10273';
export function Component10273({ value = 10273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10273, 'data-value': derived.doubled }, children);
}
export default Component10273;
