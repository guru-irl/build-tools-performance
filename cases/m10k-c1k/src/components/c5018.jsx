import React from 'react';
const LABEL_5018 = 'component_5018';
export function Component5018({ value = 5018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5018, 'data-value': derived.doubled }, children);
}
export default Component5018;
