import React from 'react';
const LABEL_13634 = 'component_13634';
export function Component13634({ value = 13634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13634, 'data-value': derived.doubled }, children);
}
export default Component13634;
