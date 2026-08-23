import React from 'react';
const LABEL_40634 = 'component_40634';
export function Component40634({ value = 40634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40634, 'data-value': derived.doubled }, children);
}
export default Component40634;
