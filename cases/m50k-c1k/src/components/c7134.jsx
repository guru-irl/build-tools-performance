import React from 'react';
const LABEL_7134 = 'component_7134';
export function Component7134({ value = 7134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7134, 'data-value': derived.doubled }, children);
}
export default Component7134;
