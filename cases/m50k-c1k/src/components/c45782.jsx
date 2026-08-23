import React from 'react';
const LABEL_45782 = 'component_45782';
export function Component45782({ value = 45782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45782, 'data-value': derived.doubled }, children);
}
export default Component45782;
