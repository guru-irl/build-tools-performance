import React from 'react';
const LABEL_11708 = 'component_11708';
export function Component11708({ value = 11708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11708, 'data-value': derived.doubled }, children);
}
export default Component11708;
