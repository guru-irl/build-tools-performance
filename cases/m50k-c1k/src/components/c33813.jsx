import React from 'react';
const LABEL_33813 = 'component_33813';
export function Component33813({ value = 33813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33813, 'data-value': derived.doubled }, children);
}
export default Component33813;
