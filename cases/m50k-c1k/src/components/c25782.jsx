import React from 'react';
const LABEL_25782 = 'component_25782';
export function Component25782({ value = 25782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25782, 'data-value': derived.doubled }, children);
}
export default Component25782;
