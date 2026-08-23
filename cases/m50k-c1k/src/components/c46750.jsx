import React from 'react';
const LABEL_46750 = 'component_46750';
export function Component46750({ value = 46750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46750, 'data-value': derived.doubled }, children);
}
export default Component46750;
