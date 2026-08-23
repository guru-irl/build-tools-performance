import React from 'react';
const LABEL_25653 = 'component_25653';
export function Component25653({ value = 25653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25653, 'data-value': derived.doubled }, children);
}
export default Component25653;
