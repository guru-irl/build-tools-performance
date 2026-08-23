import React from 'react';
const LABEL_38516 = 'component_38516';
export function Component38516({ value = 38516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38516, 'data-value': derived.doubled }, children);
}
export default Component38516;
