import React from 'react';
const LABEL_15298 = 'component_15298';
export function Component15298({ value = 15298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15298, 'data-value': derived.doubled }, children);
}
export default Component15298;
