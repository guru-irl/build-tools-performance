import React from 'react';
const LABEL_13708 = 'component_13708';
export function Component13708({ value = 13708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13708, 'data-value': derived.doubled }, children);
}
export default Component13708;
