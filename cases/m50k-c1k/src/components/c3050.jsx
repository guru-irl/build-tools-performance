import React from 'react';
const LABEL_3050 = 'component_3050';
export function Component3050({ value = 3050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3050, 'data-value': derived.doubled }, children);
}
export default Component3050;
