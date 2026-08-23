import React from 'react';
const LABEL_33383 = 'component_33383';
export function Component33383({ value = 33383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33383, 'data-value': derived.doubled }, children);
}
export default Component33383;
