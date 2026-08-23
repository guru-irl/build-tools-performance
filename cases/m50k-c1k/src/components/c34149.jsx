import React from 'react';
const LABEL_34149 = 'component_34149';
export function Component34149({ value = 34149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34149, 'data-value': derived.doubled }, children);
}
export default Component34149;
