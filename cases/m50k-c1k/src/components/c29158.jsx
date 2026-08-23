import React from 'react';
const LABEL_29158 = 'component_29158';
export function Component29158({ value = 29158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29158, 'data-value': derived.doubled }, children);
}
export default Component29158;
