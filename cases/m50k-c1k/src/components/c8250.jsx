import React from 'react';
const LABEL_8250 = 'component_8250';
export function Component8250({ value = 8250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8250, 'data-value': derived.doubled }, children);
}
export default Component8250;
