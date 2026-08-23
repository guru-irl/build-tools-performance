import React from 'react';
const LABEL_23636 = 'component_23636';
export function Component23636({ value = 23636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23636, 'data-value': derived.doubled }, children);
}
export default Component23636;
