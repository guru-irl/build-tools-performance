import React from 'react';
const LABEL_41947 = 'component_41947';
export function Component41947({ value = 41947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41947, 'data-value': derived.doubled }, children);
}
export default Component41947;
