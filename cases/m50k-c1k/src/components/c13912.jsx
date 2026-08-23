import React from 'react';
const LABEL_13912 = 'component_13912';
export function Component13912({ value = 13912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13912, 'data-value': derived.doubled }, children);
}
export default Component13912;
