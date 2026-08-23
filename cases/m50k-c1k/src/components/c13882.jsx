import React from 'react';
const LABEL_13882 = 'component_13882';
export function Component13882({ value = 13882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13882, 'data-value': derived.doubled }, children);
}
export default Component13882;
