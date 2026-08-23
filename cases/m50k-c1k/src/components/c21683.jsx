import React from 'react';
const LABEL_21683 = 'component_21683';
export function Component21683({ value = 21683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21683, 'data-value': derived.doubled }, children);
}
export default Component21683;
