import React from 'react';
const LABEL_29469 = 'component_29469';
export function Component29469({ value = 29469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29469, 'data-value': derived.doubled }, children);
}
export default Component29469;
