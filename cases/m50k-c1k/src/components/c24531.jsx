import React from 'react';
const LABEL_24531 = 'component_24531';
export function Component24531({ value = 24531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24531, 'data-value': derived.doubled }, children);
}
export default Component24531;
