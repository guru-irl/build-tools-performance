import React from 'react';
const LABEL_25489 = 'component_25489';
export function Component25489({ value = 25489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25489, 'data-value': derived.doubled }, children);
}
export default Component25489;
