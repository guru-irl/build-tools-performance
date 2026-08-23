import React from 'react';
const LABEL_23368 = 'component_23368';
export function Component23368({ value = 23368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23368, 'data-value': derived.doubled }, children);
}
export default Component23368;
