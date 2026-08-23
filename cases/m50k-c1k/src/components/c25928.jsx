import React from 'react';
const LABEL_25928 = 'component_25928';
export function Component25928({ value = 25928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25928, 'data-value': derived.doubled }, children);
}
export default Component25928;
