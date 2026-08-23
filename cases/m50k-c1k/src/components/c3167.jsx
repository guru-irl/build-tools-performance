import React from 'react';
const LABEL_3167 = 'component_3167';
export function Component3167({ value = 3167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3167, 'data-value': derived.doubled }, children);
}
export default Component3167;
