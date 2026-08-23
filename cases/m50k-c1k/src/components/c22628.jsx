import React from 'react';
const LABEL_22628 = 'component_22628';
export function Component22628({ value = 22628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22628, 'data-value': derived.doubled }, children);
}
export default Component22628;
