import React from 'react';
const LABEL_38018 = 'component_38018';
export function Component38018({ value = 38018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38018, 'data-value': derived.doubled }, children);
}
export default Component38018;
