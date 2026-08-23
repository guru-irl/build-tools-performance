import React from 'react';
const LABEL_25923 = 'component_25923';
export function Component25923({ value = 25923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25923, 'data-value': derived.doubled }, children);
}
export default Component25923;
