import React from 'react';
const LABEL_26018 = 'component_26018';
export function Component26018({ value = 26018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26018, 'data-value': derived.doubled }, children);
}
export default Component26018;
