import React from 'react';
const LABEL_46453 = 'component_46453';
export function Component46453({ value = 46453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46453, 'data-value': derived.doubled }, children);
}
export default Component46453;
