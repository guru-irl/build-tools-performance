import React from 'react';
const LABEL_36634 = 'component_36634';
export function Component36634({ value = 36634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36634, 'data-value': derived.doubled }, children);
}
export default Component36634;
