import React from 'react';
const LABEL_20372 = 'component_20372';
export function Component20372({ value = 20372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20372, 'data-value': derived.doubled }, children);
}
export default Component20372;
