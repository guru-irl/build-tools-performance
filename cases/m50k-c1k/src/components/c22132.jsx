import React from 'react';
const LABEL_22132 = 'component_22132';
export function Component22132({ value = 22132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22132, 'data-value': derived.doubled }, children);
}
export default Component22132;
