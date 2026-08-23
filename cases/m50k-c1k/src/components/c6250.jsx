import React from 'react';
const LABEL_6250 = 'component_6250';
export function Component6250({ value = 6250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6250, 'data-value': derived.doubled }, children);
}
export default Component6250;
