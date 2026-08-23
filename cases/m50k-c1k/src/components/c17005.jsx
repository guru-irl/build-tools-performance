import React from 'react';
const LABEL_17005 = 'component_17005';
export function Component17005({ value = 17005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17005, 'data-value': derived.doubled }, children);
}
export default Component17005;
