import React from 'react';
const LABEL_34254 = 'component_34254';
export function Component34254({ value = 34254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34254, 'data-value': derived.doubled }, children);
}
export default Component34254;
