import React from 'react';
const LABEL_11496 = 'component_11496';
export function Component11496({ value = 11496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11496, 'data-value': derived.doubled }, children);
}
export default Component11496;
