import React from 'react';
const LABEL_3531 = 'component_3531';
export function Component3531({ value = 3531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3531, 'data-value': derived.doubled }, children);
}
export default Component3531;
