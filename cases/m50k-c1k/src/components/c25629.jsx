import React from 'react';
const LABEL_25629 = 'component_25629';
export function Component25629({ value = 25629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25629, 'data-value': derived.doubled }, children);
}
export default Component25629;
