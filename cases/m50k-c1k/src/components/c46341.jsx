import React from 'react';
const LABEL_46341 = 'component_46341';
export function Component46341({ value = 46341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46341, 'data-value': derived.doubled }, children);
}
export default Component46341;
