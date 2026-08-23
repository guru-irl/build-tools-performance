import React from 'react';
const LABEL_38242 = 'component_38242';
export function Component38242({ value = 38242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38242, 'data-value': derived.doubled }, children);
}
export default Component38242;
