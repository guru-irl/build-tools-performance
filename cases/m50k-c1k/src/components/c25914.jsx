import React from 'react';
const LABEL_25914 = 'component_25914';
export function Component25914({ value = 25914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25914, 'data-value': derived.doubled }, children);
}
export default Component25914;
