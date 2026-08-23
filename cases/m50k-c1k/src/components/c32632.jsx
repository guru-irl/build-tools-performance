import React from 'react';
const LABEL_32632 = 'component_32632';
export function Component32632({ value = 32632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32632, 'data-value': derived.doubled }, children);
}
export default Component32632;
