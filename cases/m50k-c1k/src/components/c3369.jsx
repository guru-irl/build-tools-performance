import React from 'react';
const LABEL_3369 = 'component_3369';
export function Component3369({ value = 3369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3369, 'data-value': derived.doubled }, children);
}
export default Component3369;
