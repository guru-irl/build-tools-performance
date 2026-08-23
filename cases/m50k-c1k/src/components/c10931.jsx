import React from 'react';
const LABEL_10931 = 'component_10931';
export function Component10931({ value = 10931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10931, 'data-value': derived.doubled }, children);
}
export default Component10931;
