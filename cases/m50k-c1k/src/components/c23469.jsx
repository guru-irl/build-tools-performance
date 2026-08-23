import React from 'react';
const LABEL_23469 = 'component_23469';
export function Component23469({ value = 23469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23469, 'data-value': derived.doubled }, children);
}
export default Component23469;
