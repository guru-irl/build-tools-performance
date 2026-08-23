import React from 'react';
const LABEL_40782 = 'component_40782';
export function Component40782({ value = 40782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40782, 'data-value': derived.doubled }, children);
}
export default Component40782;
