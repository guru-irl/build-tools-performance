import React from 'react';
const LABEL_34150 = 'component_34150';
export function Component34150({ value = 34150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34150, 'data-value': derived.doubled }, children);
}
export default Component34150;
