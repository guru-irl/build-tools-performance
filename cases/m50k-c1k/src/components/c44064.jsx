import React from 'react';
const LABEL_44064 = 'component_44064';
export function Component44064({ value = 44064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44064, 'data-value': derived.doubled }, children);
}
export default Component44064;
