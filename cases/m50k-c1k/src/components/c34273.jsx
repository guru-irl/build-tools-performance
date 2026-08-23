import React from 'react';
const LABEL_34273 = 'component_34273';
export function Component34273({ value = 34273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34273, 'data-value': derived.doubled }, children);
}
export default Component34273;
