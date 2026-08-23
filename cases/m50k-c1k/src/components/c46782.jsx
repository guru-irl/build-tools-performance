import React from 'react';
const LABEL_46782 = 'component_46782';
export function Component46782({ value = 46782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46782, 'data-value': derived.doubled }, children);
}
export default Component46782;
