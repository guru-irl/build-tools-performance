import React from 'react';
const LABEL_32342 = 'component_32342';
export function Component32342({ value = 32342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32342, 'data-value': derived.doubled }, children);
}
export default Component32342;
