import React from 'react';
const LABEL_7782 = 'component_7782';
export function Component7782({ value = 7782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7782, 'data-value': derived.doubled }, children);
}
export default Component7782;
