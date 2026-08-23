import React from 'react';
const LABEL_3092 = 'component_3092';
export function Component3092({ value = 3092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3092, 'data-value': derived.doubled }, children);
}
export default Component3092;
