import React from 'react';
const LABEL_3827 = 'component_3827';
export function Component3827({ value = 3827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3827, 'data-value': derived.doubled }, children);
}
export default Component3827;
