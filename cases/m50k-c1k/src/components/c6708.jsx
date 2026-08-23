import React from 'react';
const LABEL_6708 = 'component_6708';
export function Component6708({ value = 6708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6708, 'data-value': derived.doubled }, children);
}
export default Component6708;
