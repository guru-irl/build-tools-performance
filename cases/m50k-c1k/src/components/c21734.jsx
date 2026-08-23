import React from 'react';
const LABEL_21734 = 'component_21734';
export function Component21734({ value = 21734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21734, 'data-value': derived.doubled }, children);
}
export default Component21734;
