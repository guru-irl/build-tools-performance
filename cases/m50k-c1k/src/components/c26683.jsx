import React from 'react';
const LABEL_26683 = 'component_26683';
export function Component26683({ value = 26683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26683, 'data-value': derived.doubled }, children);
}
export default Component26683;
