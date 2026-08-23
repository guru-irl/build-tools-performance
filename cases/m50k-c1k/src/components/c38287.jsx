import React from 'react';
const LABEL_38287 = 'component_38287';
export function Component38287({ value = 38287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38287, 'data-value': derived.doubled }, children);
}
export default Component38287;
