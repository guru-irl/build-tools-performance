import React from 'react';
const LABEL_33298 = 'component_33298';
export function Component33298({ value = 33298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33298, 'data-value': derived.doubled }, children);
}
export default Component33298;
