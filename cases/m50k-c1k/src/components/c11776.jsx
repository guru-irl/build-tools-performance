import React from 'react';
const LABEL_11776 = 'component_11776';
export function Component11776({ value = 11776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11776, 'data-value': derived.doubled }, children);
}
export default Component11776;
