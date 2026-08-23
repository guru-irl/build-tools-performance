import React from 'react';
const LABEL_22821 = 'component_22821';
export function Component22821({ value = 22821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22821, 'data-value': derived.doubled }, children);
}
export default Component22821;
