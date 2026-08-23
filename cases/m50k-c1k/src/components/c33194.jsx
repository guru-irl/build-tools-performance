import React from 'react';
const LABEL_33194 = 'component_33194';
export function Component33194({ value = 33194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33194, 'data-value': derived.doubled }, children);
}
export default Component33194;
