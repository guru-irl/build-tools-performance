import React from 'react';
const LABEL_25149 = 'component_25149';
export function Component25149({ value = 25149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25149, 'data-value': derived.doubled }, children);
}
export default Component25149;
