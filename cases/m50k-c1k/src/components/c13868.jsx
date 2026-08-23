import React from 'react';
const LABEL_13868 = 'component_13868';
export function Component13868({ value = 13868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13868, 'data-value': derived.doubled }, children);
}
export default Component13868;
