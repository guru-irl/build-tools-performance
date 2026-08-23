import React from 'react';
const LABEL_33951 = 'component_33951';
export function Component33951({ value = 33951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33951, 'data-value': derived.doubled }, children);
}
export default Component33951;
