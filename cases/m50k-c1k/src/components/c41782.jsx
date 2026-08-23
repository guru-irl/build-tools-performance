import React from 'react';
const LABEL_41782 = 'component_41782';
export function Component41782({ value = 41782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41782, 'data-value': derived.doubled }, children);
}
export default Component41782;
