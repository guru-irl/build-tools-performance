import React from 'react';
const LABEL_3802 = 'component_3802';
export function Component3802({ value = 3802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3802, 'data-value': derived.doubled }, children);
}
export default Component3802;
