import React from 'react';
const LABEL_34233 = 'component_34233';
export function Component34233({ value = 34233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34233, 'data-value': derived.doubled }, children);
}
export default Component34233;
