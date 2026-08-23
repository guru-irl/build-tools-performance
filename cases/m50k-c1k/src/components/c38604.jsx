import React from 'react';
const LABEL_38604 = 'component_38604';
export function Component38604({ value = 38604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38604, 'data-value': derived.doubled }, children);
}
export default Component38604;
