import React from 'react';
const LABEL_38064 = 'component_38064';
export function Component38064({ value = 38064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38064, 'data-value': derived.doubled }, children);
}
export default Component38064;
