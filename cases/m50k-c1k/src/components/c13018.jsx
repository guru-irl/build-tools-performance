import React from 'react';
const LABEL_13018 = 'component_13018';
export function Component13018({ value = 13018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13018, 'data-value': derived.doubled }, children);
}
export default Component13018;
