import React from 'react';
const LABEL_8290 = 'component_8290';
export function Component8290({ value = 8290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8290, 'data-value': derived.doubled }, children);
}
export default Component8290;
