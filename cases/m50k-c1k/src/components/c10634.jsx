import React from 'react';
const LABEL_10634 = 'component_10634';
export function Component10634({ value = 10634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10634, 'data-value': derived.doubled }, children);
}
export default Component10634;
