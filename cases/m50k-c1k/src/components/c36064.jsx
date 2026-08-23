import React from 'react';
const LABEL_36064 = 'component_36064';
export function Component36064({ value = 36064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36064, 'data-value': derived.doubled }, children);
}
export default Component36064;
