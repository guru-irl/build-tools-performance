import React from 'react';
const LABEL_3222 = 'component_3222';
export function Component3222({ value = 3222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3222, 'data-value': derived.doubled }, children);
}
export default Component3222;
