import React from 'react';
const LABEL_5064 = 'component_5064';
export function Component5064({ value = 5064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5064, 'data-value': derived.doubled }, children);
}
export default Component5064;
