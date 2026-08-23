import React from 'react';
const LABEL_33243 = 'component_33243';
export function Component33243({ value = 33243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33243, 'data-value': derived.doubled }, children);
}
export default Component33243;
