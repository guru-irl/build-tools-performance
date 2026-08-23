import React from 'react';
const LABEL_8776 = 'component_8776';
export function Component8776({ value = 8776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8776, 'data-value': derived.doubled }, children);
}
export default Component8776;
