import React from 'react';
const LABEL_34708 = 'component_34708';
export function Component34708({ value = 34708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34708, 'data-value': derived.doubled }, children);
}
export default Component34708;
