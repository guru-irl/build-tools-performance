import React from 'react';
const LABEL_33130 = 'component_33130';
export function Component33130({ value = 33130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33130, 'data-value': derived.doubled }, children);
}
export default Component33130;
