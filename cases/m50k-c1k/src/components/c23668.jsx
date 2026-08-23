import React from 'react';
const LABEL_23668 = 'component_23668';
export function Component23668({ value = 23668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23668, 'data-value': derived.doubled }, children);
}
export default Component23668;
