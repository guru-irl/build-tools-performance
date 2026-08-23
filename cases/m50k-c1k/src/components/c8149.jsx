import React from 'react';
const LABEL_8149 = 'component_8149';
export function Component8149({ value = 8149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8149, 'data-value': derived.doubled }, children);
}
export default Component8149;
