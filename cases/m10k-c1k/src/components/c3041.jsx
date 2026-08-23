import React from 'react';
const LABEL_3041 = 'component_3041';
export function Component3041({ value = 3041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3041, 'data-value': derived.doubled }, children);
}
export default Component3041;
