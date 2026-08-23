import React from 'react';
const LABEL_38127 = 'component_38127';
export function Component38127({ value = 38127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38127, 'data-value': derived.doubled }, children);
}
export default Component38127;
