import React from 'react';
const LABEL_25154 = 'component_25154';
export function Component25154({ value = 25154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25154, 'data-value': derived.doubled }, children);
}
export default Component25154;
