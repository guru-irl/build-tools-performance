import React from 'react';
const LABEL_3708 = 'component_3708';
export function Component3708({ value = 3708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3708, 'data-value': derived.doubled }, children);
}
export default Component3708;
