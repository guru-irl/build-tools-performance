import React from 'react';
const LABEL_3324 = 'component_3324';
export function Component3324({ value = 3324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3324, 'data-value': derived.doubled }, children);
}
export default Component3324;
