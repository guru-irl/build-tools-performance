import React from 'react';
const LABEL_34200 = 'component_34200';
export function Component34200({ value = 34200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34200, 'data-value': derived.doubled }, children);
}
export default Component34200;
