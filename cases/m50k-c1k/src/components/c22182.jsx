import React from 'react';
const LABEL_22182 = 'component_22182';
export function Component22182({ value = 22182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22182, 'data-value': derived.doubled }, children);
}
export default Component22182;
