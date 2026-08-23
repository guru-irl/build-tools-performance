import React from 'react';
const LABEL_3097 = 'component_3097';
export function Component3097({ value = 3097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3097, 'data-value': derived.doubled }, children);
}
export default Component3097;
