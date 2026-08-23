import React from 'react';
const LABEL_33708 = 'component_33708';
export function Component33708({ value = 33708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33708, 'data-value': derived.doubled }, children);
}
export default Component33708;
