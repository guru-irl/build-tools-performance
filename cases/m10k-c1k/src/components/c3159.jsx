import React from 'react';
const LABEL_3159 = 'component_3159';
export function Component3159({ value = 3159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3159, 'data-value': derived.doubled }, children);
}
export default Component3159;
