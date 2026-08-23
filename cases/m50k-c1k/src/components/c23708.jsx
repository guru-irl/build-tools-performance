import React from 'react';
const LABEL_23708 = 'component_23708';
export function Component23708({ value = 23708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23708, 'data-value': derived.doubled }, children);
}
export default Component23708;
