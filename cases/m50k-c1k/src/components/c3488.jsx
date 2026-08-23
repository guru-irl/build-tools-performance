import React from 'react';
const LABEL_3488 = 'component_3488';
export function Component3488({ value = 3488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3488, 'data-value': derived.doubled }, children);
}
export default Component3488;
