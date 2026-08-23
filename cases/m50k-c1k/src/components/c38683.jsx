import React from 'react';
const LABEL_38683 = 'component_38683';
export function Component38683({ value = 38683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38683, 'data-value': derived.doubled }, children);
}
export default Component38683;
