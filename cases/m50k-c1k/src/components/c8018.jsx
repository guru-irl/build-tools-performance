import React from 'react';
const LABEL_8018 = 'component_8018';
export function Component8018({ value = 8018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8018, 'data-value': derived.doubled }, children);
}
export default Component8018;
