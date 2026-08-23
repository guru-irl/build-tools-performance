import React from 'react';
const LABEL_634 = 'component_634';
export function Component634({ value = 634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_634, 'data-value': derived.doubled }, children);
}
export default Component634;
