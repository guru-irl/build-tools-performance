import React from 'react';
const LABEL_3007 = 'component_3007';
export function Component3007({ value = 3007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3007, 'data-value': derived.doubled }, children);
}
export default Component3007;
