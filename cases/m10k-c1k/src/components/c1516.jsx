import React from 'react';
const LABEL_1516 = 'component_1516';
export function Component1516({ value = 1516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1516, 'data-value': derived.doubled }, children);
}
export default Component1516;
