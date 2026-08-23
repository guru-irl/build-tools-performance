import React from 'react';
const LABEL_43017 = 'component_43017';
export function Component43017({ value = 43017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43017, 'data-value': derived.doubled }, children);
}
export default Component43017;
