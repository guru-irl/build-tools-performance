import React from 'react';
const LABEL_34539 = 'component_34539';
export function Component34539({ value = 34539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34539, 'data-value': derived.doubled }, children);
}
export default Component34539;
