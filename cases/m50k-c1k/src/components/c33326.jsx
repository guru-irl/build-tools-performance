import React from 'react';
const LABEL_33326 = 'component_33326';
export function Component33326({ value = 33326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33326, 'data-value': derived.doubled }, children);
}
export default Component33326;
