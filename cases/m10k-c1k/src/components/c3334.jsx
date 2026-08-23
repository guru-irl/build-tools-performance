import React from 'react';
const LABEL_3334 = 'component_3334';
export function Component3334({ value = 3334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3334, 'data-value': derived.doubled }, children);
}
export default Component3334;
