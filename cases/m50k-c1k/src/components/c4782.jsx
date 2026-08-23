import React from 'react';
const LABEL_4782 = 'component_4782';
export function Component4782({ value = 4782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4782, 'data-value': derived.doubled }, children);
}
export default Component4782;
