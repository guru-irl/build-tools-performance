import React from 'react';
const LABEL_39324 = 'component_39324';
export function Component39324({ value = 39324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39324, 'data-value': derived.doubled }, children);
}
export default Component39324;
