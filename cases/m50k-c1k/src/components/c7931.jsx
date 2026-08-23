import React from 'react';
const LABEL_7931 = 'component_7931';
export function Component7931({ value = 7931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7931, 'data-value': derived.doubled }, children);
}
export default Component7931;
