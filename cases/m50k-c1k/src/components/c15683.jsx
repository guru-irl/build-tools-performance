import React from 'react';
const LABEL_15683 = 'component_15683';
export function Component15683({ value = 15683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15683, 'data-value': derived.doubled }, children);
}
export default Component15683;
