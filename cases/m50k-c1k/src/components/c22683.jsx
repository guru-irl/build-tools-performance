import React from 'react';
const LABEL_22683 = 'component_22683';
export function Component22683({ value = 22683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22683, 'data-value': derived.doubled }, children);
}
export default Component22683;
