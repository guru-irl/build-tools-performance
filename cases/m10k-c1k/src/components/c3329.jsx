import React from 'react';
const LABEL_3329 = 'component_3329';
export function Component3329({ value = 3329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3329, 'data-value': derived.doubled }, children);
}
export default Component3329;
