import React from 'react';
const LABEL_3211 = 'component_3211';
export function Component3211({ value = 3211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3211, 'data-value': derived.doubled }, children);
}
export default Component3211;
