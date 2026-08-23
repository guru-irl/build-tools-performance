import React from 'react';
const LABEL_6271 = 'component_6271';
export function Component6271({ value = 6271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6271, 'data-value': derived.doubled }, children);
}
export default Component6271;
