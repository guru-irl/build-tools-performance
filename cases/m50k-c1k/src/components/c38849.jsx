import React from 'react';
const LABEL_38849 = 'component_38849';
export function Component38849({ value = 38849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38849, 'data-value': derived.doubled }, children);
}
export default Component38849;
