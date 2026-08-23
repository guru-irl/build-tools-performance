import React from 'react';
const LABEL_25763 = 'component_25763';
export function Component25763({ value = 25763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25763, 'data-value': derived.doubled }, children);
}
export default Component25763;
