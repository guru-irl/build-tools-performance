import React from 'react';
const LABEL_36604 = 'component_36604';
export function Component36604({ value = 36604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36604, 'data-value': derived.doubled }, children);
}
export default Component36604;
