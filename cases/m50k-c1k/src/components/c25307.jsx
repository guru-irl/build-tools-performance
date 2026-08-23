import React from 'react';
const LABEL_25307 = 'component_25307';
export function Component25307({ value = 25307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25307, 'data-value': derived.doubled }, children);
}
export default Component25307;
