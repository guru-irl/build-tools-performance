import React from 'react';
const LABEL_21041 = 'component_21041';
export function Component21041({ value = 21041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21041, 'data-value': derived.doubled }, children);
}
export default Component21041;
