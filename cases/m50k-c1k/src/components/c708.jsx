import React from 'react';
const LABEL_708 = 'component_708';
export function Component708({ value = 708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_708, 'data-value': derived.doubled }, children);
}
export default Component708;
