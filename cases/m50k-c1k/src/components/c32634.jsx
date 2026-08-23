import React from 'react';
const LABEL_32634 = 'component_32634';
export function Component32634({ value = 32634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32634, 'data-value': derived.doubled }, children);
}
export default Component32634;
