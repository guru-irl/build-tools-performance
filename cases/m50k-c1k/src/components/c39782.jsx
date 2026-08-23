import React from 'react';
const LABEL_39782 = 'component_39782';
export function Component39782({ value = 39782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39782, 'data-value': derived.doubled }, children);
}
export default Component39782;
