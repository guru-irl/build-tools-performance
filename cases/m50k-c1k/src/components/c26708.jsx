import React from 'react';
const LABEL_26708 = 'component_26708';
export function Component26708({ value = 26708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26708, 'data-value': derived.doubled }, children);
}
export default Component26708;
