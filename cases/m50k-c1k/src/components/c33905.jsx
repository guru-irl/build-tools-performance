import React from 'react';
const LABEL_33905 = 'component_33905';
export function Component33905({ value = 33905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33905, 'data-value': derived.doubled }, children);
}
export default Component33905;
