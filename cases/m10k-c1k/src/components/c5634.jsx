import React from 'react';
const LABEL_5634 = 'component_5634';
export function Component5634({ value = 5634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5634, 'data-value': derived.doubled }, children);
}
export default Component5634;
