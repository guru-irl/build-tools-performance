import React from 'react';
const LABEL_6326 = 'component_6326';
export function Component6326({ value = 6326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6326, 'data-value': derived.doubled }, children);
}
export default Component6326;
