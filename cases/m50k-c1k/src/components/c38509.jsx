import React from 'react';
const LABEL_38509 = 'component_38509';
export function Component38509({ value = 38509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38509, 'data-value': derived.doubled }, children);
}
export default Component38509;
