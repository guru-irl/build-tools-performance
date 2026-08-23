import React from 'react';
const LABEL_25281 = 'component_25281';
export function Component25281({ value = 25281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25281, 'data-value': derived.doubled }, children);
}
export default Component25281;
