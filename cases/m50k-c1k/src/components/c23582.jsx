import React from 'react';
const LABEL_23582 = 'component_23582';
export function Component23582({ value = 23582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23582, 'data-value': derived.doubled }, children);
}
export default Component23582;
