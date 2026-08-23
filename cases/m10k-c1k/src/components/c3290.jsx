import React from 'react';
const LABEL_3290 = 'component_3290';
export function Component3290({ value = 3290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3290, 'data-value': derived.doubled }, children);
}
export default Component3290;
