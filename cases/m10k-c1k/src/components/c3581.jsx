import React from 'react';
const LABEL_3581 = 'component_3581';
export function Component3581({ value = 3581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3581, 'data-value': derived.doubled }, children);
}
export default Component3581;
