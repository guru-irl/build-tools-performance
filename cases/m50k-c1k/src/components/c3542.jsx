import React from 'react';
const LABEL_3542 = 'component_3542';
export function Component3542({ value = 3542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3542, 'data-value': derived.doubled }, children);
}
export default Component3542;
