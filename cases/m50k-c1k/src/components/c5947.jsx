import React from 'react';
const LABEL_5947 = 'component_5947';
export function Component5947({ value = 5947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5947, 'data-value': derived.doubled }, children);
}
export default Component5947;
