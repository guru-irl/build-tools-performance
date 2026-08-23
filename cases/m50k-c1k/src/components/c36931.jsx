import React from 'react';
const LABEL_36931 = 'component_36931';
export function Component36931({ value = 36931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36931, 'data-value': derived.doubled }, children);
}
export default Component36931;
