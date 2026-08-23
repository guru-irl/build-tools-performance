import React from 'react';
const LABEL_28994 = 'component_28994';
export function Component28994({ value = 28994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28994, 'data-value': derived.doubled }, children);
}
export default Component28994;
