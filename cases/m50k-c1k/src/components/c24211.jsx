import React from 'react';
const LABEL_24211 = 'component_24211';
export function Component24211({ value = 24211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24211, 'data-value': derived.doubled }, children);
}
export default Component24211;
