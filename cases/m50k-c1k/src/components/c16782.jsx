import React from 'react';
const LABEL_16782 = 'component_16782';
export function Component16782({ value = 16782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16782, 'data-value': derived.doubled }, children);
}
export default Component16782;
