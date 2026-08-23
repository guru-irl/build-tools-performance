import React from 'react';
const LABEL_1634 = 'component_1634';
export function Component1634({ value = 1634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1634, 'data-value': derived.doubled }, children);
}
export default Component1634;
