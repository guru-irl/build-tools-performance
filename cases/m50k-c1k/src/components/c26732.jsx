import React from 'react';
const LABEL_26732 = 'component_26732';
export function Component26732({ value = 26732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26732, 'data-value': derived.doubled }, children);
}
export default Component26732;
