import React from 'react';
const LABEL_39123 = 'component_39123';
export function Component39123({ value = 39123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39123, 'data-value': derived.doubled }, children);
}
export default Component39123;
