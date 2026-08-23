import React from 'react';
const LABEL_3508 = 'component_3508';
export function Component3508({ value = 3508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3508, 'data-value': derived.doubled }, children);
}
export default Component3508;
