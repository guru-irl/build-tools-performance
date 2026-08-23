import React from 'react';
const LABEL_22324 = 'component_22324';
export function Component22324({ value = 22324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22324, 'data-value': derived.doubled }, children);
}
export default Component22324;
