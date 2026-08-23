import React from 'react';
const LABEL_23318 = 'component_23318';
export function Component23318({ value = 23318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23318, 'data-value': derived.doubled }, children);
}
export default Component23318;
