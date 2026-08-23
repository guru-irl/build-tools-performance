import React from 'react';
const LABEL_33022 = 'component_33022';
export function Component33022({ value = 33022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33022, 'data-value': derived.doubled }, children);
}
export default Component33022;
