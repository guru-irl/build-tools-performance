import React from 'react';
const LABEL_14947 = 'component_14947';
export function Component14947({ value = 14947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14947, 'data-value': derived.doubled }, children);
}
export default Component14947;
