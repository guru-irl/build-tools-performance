import React from 'react';
const LABEL_28018 = 'component_28018';
export function Component28018({ value = 28018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28018, 'data-value': derived.doubled }, children);
}
export default Component28018;
