import React from 'react';
const LABEL_33264 = 'component_33264';
export function Component33264({ value = 33264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33264, 'data-value': derived.doubled }, children);
}
export default Component33264;
