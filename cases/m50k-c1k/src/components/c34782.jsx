import React from 'react';
const LABEL_34782 = 'component_34782';
export function Component34782({ value = 34782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34782, 'data-value': derived.doubled }, children);
}
export default Component34782;
