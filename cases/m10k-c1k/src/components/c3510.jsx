import React from 'react';
const LABEL_3510 = 'component_3510';
export function Component3510({ value = 3510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3510, 'data-value': derived.doubled }, children);
}
export default Component3510;
