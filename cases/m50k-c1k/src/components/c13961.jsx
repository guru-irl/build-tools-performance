import React from 'react';
const LABEL_13961 = 'component_13961';
export function Component13961({ value = 13961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13961, 'data-value': derived.doubled }, children);
}
export default Component13961;
