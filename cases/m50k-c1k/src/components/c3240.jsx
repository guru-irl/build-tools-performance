import React from 'react';
const LABEL_3240 = 'component_3240';
export function Component3240({ value = 3240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3240, 'data-value': derived.doubled }, children);
}
export default Component3240;
