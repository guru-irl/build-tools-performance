import React from 'react';
const LABEL_22708 = 'component_22708';
export function Component22708({ value = 22708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22708, 'data-value': derived.doubled }, children);
}
export default Component22708;
