import React from 'react';
const LABEL_46182 = 'component_46182';
export function Component46182({ value = 46182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46182, 'data-value': derived.doubled }, children);
}
export default Component46182;
