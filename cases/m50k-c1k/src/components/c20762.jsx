import React from 'react';
const LABEL_20762 = 'component_20762';
export function Component20762({ value = 20762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20762, 'data-value': derived.doubled }, children);
}
export default Component20762;
