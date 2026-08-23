import React from 'react';
const LABEL_20708 = 'component_20708';
export function Component20708({ value = 20708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20708, 'data-value': derived.doubled }, children);
}
export default Component20708;
