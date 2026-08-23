import React from 'react';
const LABEL_39342 = 'component_39342';
export function Component39342({ value = 39342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39342, 'data-value': derived.doubled }, children);
}
export default Component39342;
