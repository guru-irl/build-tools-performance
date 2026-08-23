import React from 'react';
const LABEL_35782 = 'component_35782';
export function Component35782({ value = 35782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35782, 'data-value': derived.doubled }, children);
}
export default Component35782;
