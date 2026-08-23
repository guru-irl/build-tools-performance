import React from 'react';
const LABEL_21469 = 'component_21469';
export function Component21469({ value = 21469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21469, 'data-value': derived.doubled }, children);
}
export default Component21469;
