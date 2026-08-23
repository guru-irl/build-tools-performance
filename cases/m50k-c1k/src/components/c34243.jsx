import React from 'react';
const LABEL_34243 = 'component_34243';
export function Component34243({ value = 34243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34243, 'data-value': derived.doubled }, children);
}
export default Component34243;
