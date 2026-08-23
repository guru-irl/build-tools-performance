import React from 'react';
const LABEL_25229 = 'component_25229';
export function Component25229({ value = 25229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25229, 'data-value': derived.doubled }, children);
}
export default Component25229;
