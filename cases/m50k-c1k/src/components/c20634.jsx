import React from 'react';
const LABEL_20634 = 'component_20634';
export function Component20634({ value = 20634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20634, 'data-value': derived.doubled }, children);
}
export default Component20634;
