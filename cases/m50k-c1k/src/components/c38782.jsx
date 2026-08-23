import React from 'react';
const LABEL_38782 = 'component_38782';
export function Component38782({ value = 38782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38782, 'data-value': derived.doubled }, children);
}
export default Component38782;
