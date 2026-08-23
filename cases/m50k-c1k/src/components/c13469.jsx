import React from 'react';
const LABEL_13469 = 'component_13469';
export function Component13469({ value = 13469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13469, 'data-value': derived.doubled }, children);
}
export default Component13469;
