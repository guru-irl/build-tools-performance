import React from 'react';
const LABEL_23683 = 'component_23683';
export function Component23683({ value = 23683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23683, 'data-value': derived.doubled }, children);
}
export default Component23683;
