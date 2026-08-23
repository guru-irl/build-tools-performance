import React from 'react';
const LABEL_8842 = 'component_8842';
export function Component8842({ value = 8842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8842, 'data-value': derived.doubled }, children);
}
export default Component8842;
