import React from 'react';
const LABEL_8947 = 'component_8947';
export function Component8947({ value = 8947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8947, 'data-value': derived.doubled }, children);
}
export default Component8947;
