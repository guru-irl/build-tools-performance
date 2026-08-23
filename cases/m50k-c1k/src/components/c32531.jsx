import React from 'react';
const LABEL_32531 = 'component_32531';
export function Component32531({ value = 32531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32531, 'data-value': derived.doubled }, children);
}
export default Component32531;
