import React from 'react';
const LABEL_32314 = 'component_32314';
export function Component32314({ value = 32314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32314, 'data-value': derived.doubled }, children);
}
export default Component32314;
