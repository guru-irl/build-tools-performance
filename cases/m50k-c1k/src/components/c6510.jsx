import React from 'react';
const LABEL_6510 = 'component_6510';
export function Component6510({ value = 6510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6510, 'data-value': derived.doubled }, children);
}
export default Component6510;
