import React from 'react';
const LABEL_3039 = 'component_3039';
export function Component3039({ value = 3039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3039, 'data-value': derived.doubled }, children);
}
export default Component3039;
