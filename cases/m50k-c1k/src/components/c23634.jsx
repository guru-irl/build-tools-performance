import React from 'react';
const LABEL_23634 = 'component_23634';
export function Component23634({ value = 23634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23634, 'data-value': derived.doubled }, children);
}
export default Component23634;
