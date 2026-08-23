import React from 'react';
const LABEL_22315 = 'component_22315';
export function Component22315({ value = 22315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22315, 'data-value': derived.doubled }, children);
}
export default Component22315;
