import React from 'react';
const LABEL_23324 = 'component_23324';
export function Component23324({ value = 23324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23324, 'data-value': derived.doubled }, children);
}
export default Component23324;
