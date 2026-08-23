import React from 'react';
const LABEL_34064 = 'component_34064';
export function Component34064({ value = 34064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34064, 'data-value': derived.doubled }, children);
}
export default Component34064;
