import React from 'react';
const LABEL_12158 = 'component_12158';
export function Component12158({ value = 12158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12158, 'data-value': derived.doubled }, children);
}
export default Component12158;
