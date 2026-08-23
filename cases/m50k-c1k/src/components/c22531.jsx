import React from 'react';
const LABEL_22531 = 'component_22531';
export function Component22531({ value = 22531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22531, 'data-value': derived.doubled }, children);
}
export default Component22531;
