import React from 'react';
const LABEL_38465 = 'component_38465';
export function Component38465({ value = 38465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38465, 'data-value': derived.doubled }, children);
}
export default Component38465;
