import React from 'react';
const LABEL_34285 = 'component_34285';
export function Component34285({ value = 34285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34285, 'data-value': derived.doubled }, children);
}
export default Component34285;
