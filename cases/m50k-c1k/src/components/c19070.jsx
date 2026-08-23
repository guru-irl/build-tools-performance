import React from 'react';
const LABEL_19070 = 'component_19070';
export function Component19070({ value = 19070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19070, 'data-value': derived.doubled }, children);
}
export default Component19070;
