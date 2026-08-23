import React from 'react';
const LABEL_28708 = 'component_28708';
export function Component28708({ value = 28708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28708, 'data-value': derived.doubled }, children);
}
export default Component28708;
