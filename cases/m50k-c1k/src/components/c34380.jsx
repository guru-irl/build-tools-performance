import React from 'react';
const LABEL_34380 = 'component_34380';
export function Component34380({ value = 34380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34380, 'data-value': derived.doubled }, children);
}
export default Component34380;
