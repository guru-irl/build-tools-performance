import React from 'react';
const LABEL_15453 = 'component_15453';
export function Component15453({ value = 15453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15453, 'data-value': derived.doubled }, children);
}
export default Component15453;
