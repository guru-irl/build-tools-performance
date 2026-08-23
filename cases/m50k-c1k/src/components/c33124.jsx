import React from 'react';
const LABEL_33124 = 'component_33124';
export function Component33124({ value = 33124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33124, 'data-value': derived.doubled }, children);
}
export default Component33124;
