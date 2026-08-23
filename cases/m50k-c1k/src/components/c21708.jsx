import React from 'react';
const LABEL_21708 = 'component_21708';
export function Component21708({ value = 21708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21708, 'data-value': derived.doubled }, children);
}
export default Component21708;
