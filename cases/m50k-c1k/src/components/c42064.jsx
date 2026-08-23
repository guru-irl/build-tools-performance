import React from 'react';
const LABEL_42064 = 'component_42064';
export function Component42064({ value = 42064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42064, 'data-value': derived.doubled }, children);
}
export default Component42064;
