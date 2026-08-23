import React from 'react';
const LABEL_29611 = 'component_29611';
export function Component29611({ value = 29611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29611, 'data-value': derived.doubled }, children);
}
export default Component29611;
